const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

  if(message.author.bot) return;
  message.delete()
  if(!message.guild.member(message.author).hastPermission("KICK_MEMBERS")) return;
  const user = message.mentions.users.first();
  if(user.id === message.author.id) return message.channel.send("Vous pouvez pas vous kick")
  if(user) {
    const member = message.guild.member(user)
    if(member) {
      member.kick(' ').then(() => {
        message.rely(`${user.tag} a été kick`)
      }).catch(err) => {
        message.reply("Vous n'avez pas les perm")
      })

    }else {
      message.reply("Cet personne est pas sur le serveur")
    }
    }else {
    message.reply("Vous avez oublier de mentioner une personne")
  }
  }

  module.exports.help = {
    name: 'kick'
  }
