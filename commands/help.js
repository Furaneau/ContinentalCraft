const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  let hEmbed = new Discord.MessageEmbed()
  .setColor('ff0000')
  .setTitle('Commande bot')
  .setDescription('Besoin du bot')
  .addField('Commandes:', '- Ip: ******* ')
  .setFooter("J'espère que ça vous sera utile");
  msg.channel.send(hEmbed);

}

module.exports.help = {
  name: 'help'
}
