const rules = require("../config.json");

module.exports = async (client) => {
  console.log("dad: ready");

  client.dadRules = {};
  for (const rule of rules) {
    if (!(rule.guildId in client.dadRules)) {
      client.dadRules[rule.guildId] = [];
    }

    rule.ignoreChannelIds = new Set(rule.ignoreChannelIds);
    client.dadRules[rule.guildId].push(rule);
  }
};
