const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Shows bot ping!",
  run: async (client, interaction) => {
    const resultPing = await interaction.reply({
      content: "**Pinging...**",
      fetchReply: true,
    });
    const ping = resultPing.createdTimestamp - interaction.createdTimestamp;

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
    await interaction.editReply({ content: null, embeds: [pingEmbed] });
  },
};
