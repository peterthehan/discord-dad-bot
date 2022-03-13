import {
  Message,
  TextChannel,
  Webhook,
  WebhookMessageOptions,
} from "discord.js";
import { Config } from "../types";
import { getRandomInt } from "./getRandomInt";

const getWebhook = async (message: Message): Promise<Webhook> => {
  const channel = message.channel as TextChannel;
  const webhooks = await channel.fetchWebhooks();

  return !webhooks.size
    ? channel.createWebhook(message.client.user?.username || "📢")
    : (webhooks.first() as Webhook);
};

export const sendWebhook = async (
  message: Message,
  config: Config,
  response: WebhookMessageOptions
): Promise<void> => {
  const webhook = await getWebhook(message);

  webhook.send({
    allowedMentions: { parse: ["users"] },
    avatarURL: config.avatarUrls[getRandomInt(0, config.avatarUrls.length)],
    username: config.username,
    ...response,
  });
};
