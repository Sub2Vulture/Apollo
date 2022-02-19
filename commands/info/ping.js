const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply("**Pinging...**").then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp;

      const pingEmbed = new MessageEmbed()
        .setColor("#303136")
        .setTitle("Pong!")
        .setDescription(
          "<:Icon_ping:943155157833744424> Average websocket latency: `" +
            ping +
            " ms`"
        )
        .setFields(
          {
            name: "**API**",
            value: "`" + client.ws.ping + "` ms",
            inline: true,
          },
          {
            name: "**Database**",
            value: "`None`",
            inline: true,
          }
        );
      resultMessage.edit({ content: null, embeds: [pingEmbed] });
    });
  },
};
