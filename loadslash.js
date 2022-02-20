const { Client, Intents, Collection } = require("discord.js");
const { guildId } = require("./config.json");
require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  allowedMentions: [{ repliedUser: false }],
});

let bot = {
  client,
};

client.slashcommands = new Collection();

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload);
client.loadSlashCommands(bot, false);

client.on("ready", async () => {
  console.log(`Loading ${client.slashcommands.size} slash commands`);

  const guild = client.guilds.cache.get(guildId);
  if (!guild) console.error("Target Guild not found");

  await guild.commands.set([...client.slashcommands.values()]);
  console.log("Finished");
  process.exit(0);
});

client.login(process.env.TOKEN);
