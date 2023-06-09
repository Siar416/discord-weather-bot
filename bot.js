require("dotenv/config");
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [
    // Server/channel
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Weather bot is online!");
});

client.login(process.env.TOKEN);
