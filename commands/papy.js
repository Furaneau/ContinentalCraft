const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {

  bot.on('message', message => {
      if (message.content === 'papy') {
      message.channel.sendMessage('Raconte nous une histoire');
    }
  });
module.exports.help = {
  name: 'Papy'
}
