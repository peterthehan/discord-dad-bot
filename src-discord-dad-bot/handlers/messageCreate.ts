import { Guild, Message, TextChannel, Webhook } from "discord.js";
import { getConfigs } from "../util/getConfigs";

const getWebhook = async (message: Message): Promise<Webhook> => {
  const channel = message.channel as TextChannel;
  const webhooks = await channel.fetchWebhooks();

  return !webhooks.size
    ? channel.createWebhook(message.client.user?.username || "📢")
    : (webhooks.first() as Webhook);
};

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = async (message: Message): Promise<void> => {
  if (message.author.bot || message.channel.type === "DM") {
    return;
  }

  const configs = getConfigs(message.guild as Guild);
  if (!configs) {
    return;
  }

  configs
    .filter(
      (config) =>
        !config.ignoreChannelIds.has(message.channel.id) &&
        config.regExp.test(message.content) &&
        Math.random() <= config.chance
    )
    .forEach(async (config) => {
      const capture = (message.content.match(config.regExp) || [])[1];
      const response =
        !capture || !capture.length
          ? config.response
          : config.response.replace(/{capture}/gi, capture);

      const webhook = await getWebhook(message);

      webhook.send({
        content: config.pingUser ? `${message.author}, ${response}` : response,
        username: config.username,
        avatarURL: config.avatarUrls[getRandomInt(0, config.avatarUrls.length)],
        allowedMentions: { parse: ["users"] },
      });
    });
};
