const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply({
      embeds: [
        new MessageEmbed()
          .setColor("#303136")
          .setTitle("Invite me!")
          .setDescription(
            "**Click below to invite [Apollo](https://discord.com/oauth2/authorize?client_id=931832427586912276&permissions=8&scope=bot%20applications.commands) to your server!**"
          )
          .setFooter({
            text: "Apollo",
            iconURL: "https://i.imgur.com/jVnifWg.png",
          }),
      ],
      components: [
        new MessageActionRow().addComponents([
          new MessageButton()
            .setStyle("LINK")
            .setURL(
              "https://discord.com/oauth2/authorize?client_id=931832427586912276&permissions=8&scope=bot%20applications.commands"
            )
            .setLabel("Invite Apollo")
            .setEmoji("<:Icon_url:944864911027224596>"),
        ]),
      ],
    });
  },
};
