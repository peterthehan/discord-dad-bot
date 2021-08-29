import { Guild, Snowflake } from "discord.js";
import configs from "../config.json";
import { Config } from "../types";

const configMap: Map<Snowflake, Config[]> = new Map();
configs.forEach((config) => {
  if (!configMap.has(config.guildId)) {
    configMap.set(config.guildId, []);
  }

  const newConfig = {
    ...config,
    ignoreChannelIds: new Set(config.ignoreChannelIds),
    regExp: RegExp(config.regExp[0], config.regExp[1]),
  } as Config;

  configMap.set(config.guildId, [
    ...(configMap.get(config.guildId) as Config[]),
    newConfig,
  ]);
});

function getConfigs(guild: Guild): Config[] | undefined {
  if (!configMap.has(guild.id)) {
    return;
  }

  return configMap.get(guild.id);
}

export { getConfigs };
