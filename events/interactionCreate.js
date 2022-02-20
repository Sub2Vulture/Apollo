module.exports = {
  name: "interactionCreate",
  run: async (bot, interaction) => {
    const { client } = bot;
    if (!interaction.isCommand()) return;
    if (!interaction.inGuild())
      return interaction.reply({
        content:
          "<:Icon_wrong:939188533766275132> **This command can only be used in a guild!**",
        ephemeral: true,
      });

    const slashcmd = client.slashcommands.get(interaction.commandName);

    if (!slashcmd) return;

    if (slashcmd.perms && !interaction.member.permissions.has(slashcmd.perms))
      return interaction.reply({
        content:
          "<:Icon_wrong:939188533766275132> **You do not have permission to use this command!**",
        ephemeral: true,
      });

    slashcmd.run(client, interaction);
  },
};
