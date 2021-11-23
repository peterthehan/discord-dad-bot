import { Guild, Snowflake } from "discord.js";
import { configs } from "../config";
import { Config } from "../types";

const configMap: Map<Snowflake, Config[]> = new Map();
configs.forEach((config) => {
  if (!configMap.has(config.guildId)) {
    configMap.set(config.guildId, []);
  }

  configMap.set(config.guildId, [
    ...(configMap.get(config.guildId) as Config[]),
    config,
  ]);
});

function getConfigs(guild: Guild): Config[] | undefined {
  if (!configMap.has(guild.id)) {
    return;
  }

  return configMap.get(guild.id);
}

export { getConfigs };
