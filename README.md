# Discord Dad Bot

[![Discord](https://discord.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that makes dad jokes and more.

This bot was initially created for simple [dad jokes](https://en.wikipedia.org/wiki/Dad_joke) but was later generalized to handle any message whenever the user's message meets some criteria.

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
       handleTrigger: async (
         message: Message,
         config: Config
       ): Promise<void> => {
         const matches = message.content.match(/\bi(?:'| +a|’)?m +(.*)/i) || [];
         const capture = matches.slice(1).find((item) => item !== undefined);

         sendWebhook(message, config, {
           content: `${message.author}, Hi ${capture}, I'm Dad.`,
         });
       },
       chance: 0.1,
     },
   ];
   ```

   Add as many rules as you want to configure for other servers.

   - `label` is an optional descriptive label for the rule that is used for logging whenever the rule is triggered.
   - `guildId` is the server id.
   - `ignoreChannelIds` is a `Set` of text channel ids the bot ignores user messages from.
   - `username` is the display name of the webhook that sends the response message.
   - `avatarUrls` are the image urls the webhook randomly picks from to set the avatar.
   - `trigger` is a function the bot tests a user message against to determine whether to run `handleTrigger` or not.
   - `handleTrigger` is a function the bot runs if the channel criteria, `trigger`, and `chance` are satisfied.
   - `chance` is the percentage chance the bot runs `handleTrigger` even if it evaluates to `true`, use values between 0 and 1 (inclusive).

   Some useful resources:

   - [regex101](https://regex101.com/): build your `regExp`. Make sure to switch the `Flavor` to `ECMAScript (JavaScript)`.
   - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): the definitive guide to regexp.

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discord.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
