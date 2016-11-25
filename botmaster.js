const dotenv = require("dotenv");
dotenv.load();

const Botmaster = require("botmaster");

// Telegram settings
const telegramSettings = {
  credentials: {
    authToken: process.env.TELEGRAM_AUTH_TOKEN,
  },
  webhookEndpoint: "/webhook1234/",
};

// Bot code
const botsSettings = [{ telegram: telegramSettings }];
const botmaster = new Botmaster({botsSettings});

botmaster.on("update", (bot, update) => {
  bot.reply(update, "Right back at you");
});

botmaster.on("error", (bot, err) => {
  console.log(err.stack);
  console.log("there was an error");
});
