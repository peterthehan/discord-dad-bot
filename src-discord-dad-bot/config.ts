import { Message, WebhookMessageOptions } from "discord.js";
import { Config } from "./types";

export const configs = [
  {
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
    triggerResponse: (message: Message): boolean => {
      return /\bi(?:'| +a|’)?m +(.*)/i.test(message.content);
    },
    createResponse: (message: Message): WebhookMessageOptions => {
      const matches = message.content.match(/\bi(?:'| +a|’)?m +(.*)/i) || [];
      const capture = matches.slice(1).find((item) => item !== undefined);

      return { content: `${message.author}, Hi ${capture}, I'm Dad.` };
    },
    chance: 0.1,
  },
  {
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "🅱eter",
    avatarUrls: [
      "https://cdn.discordapp.com/avatars/206161807491072000/5880296a3051144254b7183b120a8a0a.png",
    ],
    triggerResponse: (message: Message): boolean => {
      return /\blet(?:'|’)?s.+go+/i.test(message.content);
    },
    createResponse: (message: Message): WebhookMessageOptions => {
      return { content: `${message.author}, let's go where?` };
    },
    chance: 0.5,
  },
  {
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "🅱eter",
    avatarUrls: [
      "https://cdn.discordapp.com/avatars/206161807491072000/5880296a3051144254b7183b120a8a0a.png",
    ],
    triggerResponse: (message: Message): boolean => {
      return /((?:\$|€) *\d+(?:\.\d{2,}| *k\b)?)|(\d+(?:\.\d{2,}| *k\b)? *(?:\$|€|usd|dollars?|bucks?|euros?))/i.test(
        message.content
      );
    },
    createResponse: (message: Message): WebhookMessageOptions => {
      const matches =
        message.content.match(
          /((?:\$|€) *\d+(?:\.\d{2,}| *k\b)?)|(\d+(?:\.\d{2,}| *k\b)? *(?:\$|€|usd|dollars?|bucks?|euros?))/i
        ) || [];
      const capture = matches.slice(1).find((item) => item !== undefined);

      return { content: `${message.author}, whale me ${capture}` };
    },
    chance: 0.5,
  },
  {
    guildId: "258167954913361930",
    ignoreChannelIds: new Set(["649020657522180128", "258167954913361930"]),
    username: "⚫",
    avatarUrls: [
      "https://cdn.discordapp.com/avatars/488918797542096896/d1fb0a94bd9e507307179e8835231ae8.png",
    ],
    triggerResponse: (message: Message): boolean => {
      const words = message.content.split(/\s+/);
      const copy = [...words];

      copy.sort();

      return words.length >= 5 && words.join(" ") === copy.join(" ");
    },
    createResponse: (message: Message): WebhookMessageOptions => {
      return {
        content: `${message.author}, Would you look at that, all of the words in your comment are in alphabetical order.`,
      };
    },
    chance: 1,
  },
] as Config[];
