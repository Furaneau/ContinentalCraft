const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./kick.js');

bot.on('ready', async () => {
  console.log('Le bot est lancé.');
  bot.user.setActivity('continentalcraft.eu');
});

bot.on('message', async (msg) => {
      if(msg.content.startsWith(config.prefix) && !msg.author.bot){
          cmdArray = msg.content.substring(config.prefix.length).split(" ")
          cmd = cmdArray[0]
          args = cmdArray.slice(1)

          let command =commands.getCommand(cmd);
          if(command) command.run(bot, msg, args);
    }
});
client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'kick') {
     if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
     if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
     member.kick()
     message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
  }
})
}

bot.login(process.env.ContinentalCraft);
