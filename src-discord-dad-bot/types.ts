import { Message, Snowflake } from "discord.js";

export interface Config {
  label?: string;
  guildId: Snowflake;
  ignoreChannelIds: Set<Snowflake>;
  username: string;
  avatarUrls: string[];
  trigger: (message: Message) => boolean;
  handleTrigger: (message: Message, config: Config) => Promise<void>;
  chance: number;
}
