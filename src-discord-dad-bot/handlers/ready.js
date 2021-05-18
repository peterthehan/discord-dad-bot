const rules = require("../config.json");

module.exports = async (client) => {
  console.log("dad: ready");

  client.dadRules = {};
  for (const rule of rules) {
    rule.ignoreChannelIds = new Set(rule.ignoreChannelIds);
    client.dadRules[rule.guildId] = rule;
  }
};
