const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {

  bot.on("message", function (msg) {
    if (msg.content.indexOf(".site") === 0) {
        bot.sendMessage(msg.channel, "ContinentalCraft.eu");
      }
});

module.exports.help = {
  name: 'site'
}
