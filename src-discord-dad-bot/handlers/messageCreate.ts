import { Guild, Message } from "discord.js";
import { getConfigs } from "../util/getConfigs";

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
        config.trigger(message) &&
        Math.random() <= config.chance
    )
    .forEach((config) => {
      config.handleTrigger(message, config);
      console.log(
        `${[config.label, `${message.author.tag} (${message.author.id})`]
          .filter((i) => i !== undefined)
          .join(" | ")} : ${message.content}`
      );
    });
};
