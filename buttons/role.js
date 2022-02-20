module.exports = {
  name: "role",
  run: async (bot, interaction, parameters) => {
    const roleId = parameters[0];
    if (!interaction.guild)
      return interaction.reply({
        content:
          "<:Icon_wrong:939188533766275132> **This command can only be used in a guild!**",
        ephemeral: true,
      });

    const role = await interaction.guild.roles.fetch(roleId);
    if (!role)
      return interaction.reply({
        content: "<:Icon_outage:944842562089386034> **Role not found!**",
        ephemeral: true,
      });

    const member = await interaction.guild.members.fetch(interaction.member.id);

    if (member.roles.cache.has(role.id)) {
      await member.roles.remove(role.id);
      return interaction.reply({
        content: `<:Icon_correct:939565076246048858> **Successfully removed ${role.name} role from you!**`,
        ephemeral: true,
      });
    } else {
      await member.roles.add(role.id);
      return interaction.reply({
        content: `<:Icon_correct:939565076246048858> **Successfully added ${role.name} role to you!**`,
        ephemeral: true,
      });
    }
  },
};
