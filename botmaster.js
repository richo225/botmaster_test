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

// message every time
botmaster.on("update", (bot, update) => {
  bot.sendTextMessageTo("Right back at you!", update.sender.id);
});

// repeats back the message
botmaster.on("update", (bot, update) => {
  bot.sendTextMessageTo(update.message.text, update.sender.id);
});

botmaster.on("error", (bot, err) => {
  console.log(err.stack);
  console.log("there was an error");
});
