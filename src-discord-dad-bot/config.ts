import { Message } from "discord.js";
import { Config } from "./types";
import { sendWebhook } from "./util/sendWebhook";

export const configs = [
  {
    label: "Profanity Filter",
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128"]),
    trigger: (message: Message): boolean => {
      const content = message.content.replace(/[^a-z0-9 ]+/gi, "");

      return /badword/i.test(content);
    },
    handleTrigger: async (message: Message): Promise<void> => {
      message.delete();
    },
    chance: 1,
  },
  {
    label: "Dad Bot",
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "Dad",
    avatarUrls: [
      "https://cdn.discordapp.com/attachments/747319121582096434/815053936569352222/5b0821d415e9f917c2730963.png",
      "https://cdn.discordapp.com/attachments/747319121582096434/815053958074597396/hidethepainharold.png",
      "https://cdn.discordapp.com/attachments/747319121582096434/815053973702049822/hide-pain-harold-title-red20-web.png",
      "https://cdn.discordapp.com/attachments/747319121582096434/815053993575055390/Harold.png",
      "https://cdn.discordapp.com/attachments/747319121582096434/815054009214959646/Hide-the-Pain-Harold-prof.png",
      "https://cdn.discordapp.com/attachments/747319121582096434/815054022464765963/18622628_146041712604173_5023056421634447578_n.png",
    ],
    trigger: (message: Message): boolean => {
      return /\bi(?:'| +a|’)?m +(.*)/i.test(message.content);
    },
    handleTrigger: async (message: Message, config: Config): Promise<void> => {
      const matches = message.content.match(/\bi(?:'| +a|’)?m +(.*)/i) || [];
      const capture = matches.slice(1).find((item) => item !== undefined);

      sendWebhook(message, config, {
        content: `${message.author}, Hi ${capture}, I'm Dad.`,
      });
    },
    chance: 0.1,
  },
  {
    label: "Let's go where?",
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "🅱eter",
    avatarUrls: [
      "https://cdn.discordapp.com/avatars/206161807491072000/5880296a3051144254b7183b120a8a0a.png",
    ],
    trigger: (message: Message): boolean => {
      return /\blet(?:'|’)?s.+go+/i.test(message.content);
    },
    handleTrigger: async (message: Message, config: Config): Promise<void> => {
      sendWebhook(message, config, {
        content: `${message.author}, let's go where?`,
      });
    },
    chance: 0.5,
  },
  {
    label: "Whale me",
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "🅱eter",
    avatarUrls: [
      "https://cdn.discordapp.com/avatars/206161807491072000/5880296a3051144254b7183b120a8a0a.png",
    ],
    trigger: (message: Message): boolean => {
      return /((?:\$|€) *\d+(?:\.\d{2,}| *k\b)?)|(\d+(?:\.\d{2,}| *k\b)? *(?:\$|€|usd|dollars?|bucks?|euros?))/i.test(
        message.content
      );
    },
    handleTrigger: async (message: Message, config: Config): Promise<void> => {
      const matches =
        message.content.match(
          /((?:\$|€) *\d+(?:\.\d{2,}| *k\b)?)|(\d+(?:\.\d{2,}| *k\b)? *(?:\$|€|usd|dollars?|bucks?|euros?))/i
        ) || [];
      const capture = matches.slice(1).find((item) => item !== undefined);

      sendWebhook(message, config, {
        content: `${message.author}, whale me ${capture}`,
      });
    },
    chance: 0.5,
  },
  {
    label: "Alphabetical sort",
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "⚫",
    avatarUrls: [
      "https://cdn.discordapp.com/avatars/488918797542096896/d1fb0a94bd9e507307179e8835231ae8.png",
    ],
    trigger: (message: Message): boolean => {
      if (!message.content) {
        return false;
      }

      const words = message.content.toLowerCase().split(/\s+/);
      if (new Set(words).size < 5) {
        return false;
      }

      const copy = [...words];
      copy.sort();

      return words.join(" ") === copy.join(" ");
    },
    handleTrigger: async (message: Message, config: Config): Promise<void> => {
      sendWebhook(message, config, {
        content: `${message.author}, Would you look at that, all of the words in your comment are in alphabetical order.`,
      });
    },
    chance: 1,
  },
] as Config[];
