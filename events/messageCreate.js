module.exports = {
  name: "messageCreate",
  run: async function runAll(bot, message) {
    const { client, prefix, owners } = bot;

    if (!message.guild) return;

    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdstr = args.shift().toLowerCase();

    let command =
      client.commands.get(cmdstr) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmdstr));

    if (!command) return;

    let member = message.member;

    if (command.devOnly && !owners.includes(member.id)) {
      return message.reply(
        "<:Icon_wrong:939188533766275132> **This command is only available to bot owners!**"
      );
    }

    if (
      command.permissions &&
      member.permissions.missing(command.permissions).length !== 0
    ) {
      return message.reply(
        "<:Icon_wrong:939188533766275132> **You don't have permission to use this command!**"
      );
    }

    try {
      await command.run({ ...bot, message, args });
    } catch (err) {
      let errMsg = err.toString();

      if (errMsg.startsWith("?")) {
        errMsg = errMsg.slice(1);
        await message.reply(errMsg);
      } else console.error(err);
    }
  },
};
