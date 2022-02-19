const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply("Pong!");
  },
};
