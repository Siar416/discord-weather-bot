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

// When the client/bot is ready, run this code (only once)
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
  // location variable is set if discrod message begins with !weather
  if (message.content.startsWith("!weather")) {
    const location = message.content.split(" ")[1];
    try {
      let response = await getWeatherData(location);

      console.log(response);
    } catch (error) {
      console.log(`Error retrieving weather data: ${error}`);
      message.channel.send("Sorry, I couldn't retrieve the weather data.");
    }
  }
});

client.login(process.env.TOKEN);
