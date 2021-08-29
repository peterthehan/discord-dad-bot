import { Snowflake } from "discord.js";

export interface Config {
  guildId: Snowflake;
  ignoreChannelIds: Set<Snowflake>;
  username: string;
  avatarUrls: string[];
  pingUser: boolean;
  regExp: RegExp;
  response: string;
  chance: number;
}
