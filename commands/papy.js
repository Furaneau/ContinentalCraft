const Discord = require('discord.js');
var bot = new Discord.Client();
bot.on('message', function (message) {
  if (message.content == '.Papy') {
    message.reply("Papy gelus");
  }
});

module.exports.help = {
  name: 'Papy'
}
