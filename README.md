# Discord Dad Bot

[![Discord](https://discord.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that makes dad jokes.

This bot was initially created for simple [dad jokes](https://en.wikipedia.org/wiki/Dad_joke) but was later generalized to send any message whenever the user's message meets some criteria.

<div align="center">
  <img
    src="https://raw.githubusercontent.com/peterthehan/discord-dad-bot/master/assets/demo.gif"
    alt="demo"
  />
</div>

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

   > Don't forget to give your bot the `Manage Webhooks` permission!

2. Download this bot and move the `src-discord-dad-bot` folder into the [/src/bots](https://github.com/peterthehan/create-discord-bot/tree/master/src/bots) folder from step 1.

3. Open [config.ts](./src-discord-dad-bot/config.ts) to configure your own settings:

   ```ts
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
   ];
   ```

   Add as many rules as you want to configure for other servers.

   - `guildId` is the server id.
   - `ignoreChannelIds` is a `Set` of text channel ids the bot ignores user messages from.
   - `username` is the display name of the webhook that sends the response message.
   - `avatarUrls` are the image urls the webhook randomly picks from to set the avatar.
   - `triggerResponse` is a function the bot tests a user message against to determine whether to send a response message or not.
   - `createResponse` is a function the bot runs to create the response message.
   - `chance` is the percentage chance the bot sends the response message, use values between 0 and 1 (inclusive).

   Some useful resources:

   - [regex101](https://regex101.com/): build your `regExp`. Make sure to switch the `Flavor` to `ECMAScript (JavaScript)`.
   - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): the definitive guide to regexp.

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discord.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
