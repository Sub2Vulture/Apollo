const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "eval",
  aliases: [],
  category: "owner",
  permissions: [],
  devOnly: true,
  run: async ({ client, message, args }) => {
    try {
      const code = args.join(" ");
      if (!code) {
        return message.reply({
          content:
            "<:Icon_wrong:939188533766275132> **Please enter in values!**",
        });
      }

      let evaled = eval(code);

      if (typeof evaled !== "string");
      evaled = require("util").inspect(evaled);

      const evalEmbed = new MessageEmbed()
        .setColor("#303136")
        .setFields(
          {
            name: "<:Icon_code:943531489646223370> **Input**",
            value: "```" + code + "```",
          },
          {
            name: "<:Icon_code:943531489646223370> **Output**",
            value: "```" + evaled + "```",
          }
        )
        .setFooter({
          text: "Apollo",
          iconURL: "https://i.imgur.com/jVnifWg.png",
        });

      message.reply({ embeds: [evalEmbed] });
    } catch (err) {
      message.reply({
        content:
          "<:Icon_wrong:939188533766275132> **ERROR**" + "```\n" + err + "```",
      });
    }
  },
};
