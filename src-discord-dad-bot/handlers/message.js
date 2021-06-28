const getWebhook = async (message) => {
  const webhooks = await message.channel.fetchWebhooks();

  return !webhooks.size
    ? message.channel.createWebhook(message.client.user.username)
    : webhooks.first();
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = async (message) => {
  if (
    message.system ||
    !message.author ||
    message.author.bot ||
    message.author.system ||
    message.channel.type !== "text" ||
    !message.member ||
    !(message.guild.id in message.client.dadRules)
  ) {
    return;
  }

  const rules = message.client.dadRules[message.guild.id];
  rules.forEach(async (rule) => {
    const regExp = RegExp(rule.regExp[0], rule.regExp[1]);
    if (
      rule.ignoreChannelIds.has(message.channel.id) ||
      !regExp.test(message.content) ||
      Math.random() > rule.chance
    ) {
      return;
    }

    const capture = message.content.match(regExp)[1];
    const response =
      !capture || !capture.length
        ? rule.response
        : rule.response.replace(/{capture}/i, capture);
    const joke = rule.pingUser ? `${message.author}, ${response}` : response;

    const webhook = await getWebhook(message);

    webhook.send(joke, {
      username: rule.username,
      avatarURL: rule.avatarUrls[getRandomInt(0, rule.avatarUrls.length)],
      allowedMentions: { parse: ["users"] },
    });
  });
};
