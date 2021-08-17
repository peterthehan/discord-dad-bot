# Discord Dad Bot

[![Discord](https://discord.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that makes dad jokes.

This bot was initially created for simple [dad jokes](https://en.wikipedia.org/wiki/Dad_joke) but it can be generalized to send a predetermined message whenever the user's message matches a configured regular expression (regexp).

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

3. Open [config.json](./src-discord-dad-bot/config.json) to configure your own settings:

   ```json
   [
     {
       "guildId": "258167954913361930",
       "ignoreChannelIds": [
         "649020657522180128",
         "803909068355928134",
         "258167954913361930"
       ],
       "username": "Dad",
       "avatarUrls": [
         "https://cdn.discordapp.com/attachments/747319121582096434/815053936569352222/5b0821d415e9f917c2730963.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815053958074597396/hidethepainharold.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815053973702049822/hide-pain-harold-title-red20-web.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815053993575055390/Harold.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815054009214959646/Hide-the-Pain-Harold-prof.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815054022464765963/18622628_146041712604173_5023056421634447578_n.png"
       ],
       "pingUser": true,
       "regExp": ["\\bi(?:'| +a|’)?m +(.*)", "i"],
       "response": "Hi {capture}, I'm Dad.",
       "chance": 0.1
     }
   ]
   ```

   Add as many rules as you want to configure for other servers.

   - `guildId` is the server id.
   - `ignoreChannelIds` are the text channel ids the bot ignores user messages from.
   - `username` is the display name of the webhook that sends the `response` message.
   - `avatarUrls` are the image urls the webhook randomly picks from to set the avatar.
   - `pingUser` is a boolean that determines whether the bot pings the user (`true`) or not (`false`).
   - `regExp` is an array containing up to 2 string elements:
     - The first element is a required string defining the regexp the bot tests user messages against to determine whether to send a `response` or not.
     - The second element is an optional string defining the regexp flags.
   - `response` is the message the bot sends.
     - Use the string `{capture}` in the `response` string to replace with `regExp`'s [capture group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).
   - `chance` is the percentage chance the bot sends the `response`, use values between 0 and 1 (inclusive).

   Some useful resources:

   - [regex101](https://regex101.com/): build your `regExp`. Make sure to switch the `Flavor` to `ECMAScript (JavaScript)`.
   - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): the definitive guide to regexp.

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discord.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
