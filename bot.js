require("dotenv/config");
const { Client, IntentsBitField, EmbedBuilder, Events } = require("discord.js");
const { getWeatherData } = require("./utils/getWeatherData");

// Create a new client instance
const client = new Client({
  intents: [
    // Server/channel - Guild refers to Discord server
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// When teh client/bot is ready, run this code (only once)
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TOKEN);
