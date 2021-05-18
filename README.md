# Discord Dad Bot

[![Discord](https://discord.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that makes dad jokes.

The bot grabs all text after `i'm`, `im`, and `i am` (case-insensitive) to generate the message.

<div align="center">
  <img
    src="https://raw.githubusercontent.com/peterthehan/discord-dad-bot/master/assets/demo.gif"
    alt="demo"
  />
</div>

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

   > Don't forget to give your bot the `Manage Webhooks` permission!

2. Download this widget and move the `src-discord-dad-bot` folder into the [src/widgets/](https://github.com/peterthehan/create-discord-bot/tree/master/app/src/widgets) folder created in step 1.

3. Open [config.json](https://github.com/peterthehan/discord-dad-bot/blob/master/src-discord-dad-bot/config.json) to configure your own settings:

   ```json
   [
     {
       "guildId": "258167954913361930",
       "ignoreChannelIds": [
         "649020657522180128",
         "803909068355928134",
         "258167954913361930"
       ],
       "avatarUrls": [
         "https://cdn.discordapp.com/attachments/747319121582096434/815053936569352222/5b0821d415e9f917c2730963.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815053958074597396/hidethepainharold.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815053973702049822/hide-pain-harold-title-red20-web.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815053993575055390/Harold.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815054009214959646/Hide-the-Pain-Harold-prof.png",
         "https://cdn.discordapp.com/attachments/747319121582096434/815054022464765963/18622628_146041712604173_5023056421634447578_n.png"
       ],
       "chance": 0.1
     }
   ]
   ```

   Add as many rules as you want to configure for other servers.

   - `guildId` is your server id.
   - `ignoreChannelIds` are the text channel ids the bot ignores user messages from.
   - `avatarUrls` are the image urls the bot uses to set the webhook avatar url.
   - `chance` is the percentage chance the bot sends the dad joke, use values between 0 and 1 (inclusive).

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discordapp.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
