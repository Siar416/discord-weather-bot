const axios = require("axios");

const getWeatherData = async (location) => {
  try {
    const weatherDataResponse = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`
    );

    return weatherDataResponse;
  } catch (error) {
    throw new Error("There was an issue retreiving the weather data.");
  }
};

module.exports = { getWeatherData };
