const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  member.roles.cache.has('Admin');
  let stylé = new Discord.MessageEmbed()
  .setColor('ff0000')
  .setTitle('Commande bot')
  .setDescription('Besoin du bot')
  .addField('Commandes:', '.Warn .Mute .Kick .Ban .Suppr .')
  .setFooter("J'espère que ça vous sera utile");
  msg.channel.send(stylé);

}

module.exports.help = {
  name: 'help'
}
