const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

  if(!message.guild.member(message.author).hasPermission("KiCK_MEMBERS")) return message.channel.send(`Vous avez pas les perm`);

  if(message.mention.user.size === 0) {
    return message.channel.send(`Aucune personne`);
  }

  let kick = message.guild.member(message.mention.user.first())

  if(!kick){
    return message.channel.send(`Pas de joueur`);
  }

  if(!message.guild.member(client.user).hasPermission("KiCK_MEMBERS"))return message.channel.send(`Manque de permision`);

  kick.kick().then(member => {
    message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
  });
};

module.exports.config = {
  name: "kick"
};
