const Discord = require('discord.js');

module.exports.run = (bot, msg, args) => {
  let stylé = new Discord.MessageEmbed()
  .setColor('ff0000')
  .setTitle('Commande bot')
  .setDescription('Besoin du bot')
  .addField('Commandes:', '- Ip: ******* ')
  .setFoot("J'espère que ça vous sera utile");
  msg.channel.send(stylé)

}

module.exports.help = {
  name: 'help'
}
