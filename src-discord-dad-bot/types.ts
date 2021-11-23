import { Message, Snowflake, WebhookMessageOptions } from "discord.js";

export interface Config {
  guildId: Snowflake;
  ignoreChannelIds: Set<Snowflake>;
  username: string;
  avatarUrls: string[];
  triggerResponse: (message: Message) => boolean;
  createResponse: (message: Message) => WebhookMessageOptions;
  chance: number;
}
