const rules = require("../config.json");

module.exports = async (client) => {
  console.log("dad: ready");

  client.dadRules = {};
  for (const rule of rules) {
    client.dadRules[rule.guildId] = rule;
  }
};
