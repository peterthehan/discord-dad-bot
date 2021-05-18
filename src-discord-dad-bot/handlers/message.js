const dadRegExp = /\bi(?:'| a|’)?m +(.*)/i;

const getWebhook = async (message) => {
  const webhooks = await message.channel.fetchWebhooks();

  return !webhooks.size
    ? message.channel.createWebhook(message.client.user.username)
    : webhooks.first();
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
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

  const rule = message.client.dadRules[message.guild.id];
  if (
    rule.ignoreChannelIds.has(message.channel.id) ||
    !dadRegExp.test(message.content) ||
    Math.random() > rule.chance
  ) {
    return;
  }

  const name = message.content.match(dadRegExp)[1];
  if (name.length === 0) {
    return;
  }

  const webhook = await getWebhook(message);
  const joke = rule.pingUser
    ? `${message.author} Hi ${name}, I'm Dad.`
    : `Hi ${name}, I'm Dad.`;
  webhook.send(joke, {
    username: "Dad",
    avatarURL: rule.avatarUrls[getRandomInt(0, rule.avatarUrls.length)],
    allowedMentions: { parse: ["users"] },
  });
};
