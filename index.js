const Discord = require("discord.js");
const { Client, Intents,Collection  } = require("discord.js");
const fs = require("fs");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
  ],
  partials: [`CHANNEL`, `MESSAGE`, `REACTION`],
  autoReconnect: true,
});

const config = require("./config");
client.config = config;
client.slashcommand = new Collection();
client.button = new Collection();
//client.categories = require("fs").readdirSync(`./src/eventHandler`);
[`eventHandler`,"commandHandler","buttonHandler"]
    .filter(Boolean)
    .forEach(h => {
      require(`./src/handler/${h}`)(client);
});


// LOGIN WITH THE TOKEN
client.login(config.BotToken);