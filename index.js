const { Client, Intents, Collection } = require("discord.js");
const { prefix, owners } = require("./config.json");
require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  allowedMentions: [{ repliedUser: false }],
});

let bot = {
  client,
  prefix: prefix,
  owners: owners,
};

client.commands = new Collection();
client.events = new Collection();
client.slashcommands = new Collection();
client.buttons = new Collection();


client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload);
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload);
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload);

client.loadEvents(bot, false);
client.loadCommands(bot, false);
client.loadSlashCommands(bot, false);
client.loadButtons(bot, false);

module.exports = bot;

client.login(process.env.TOKEN);
