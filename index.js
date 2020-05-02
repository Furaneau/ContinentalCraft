const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');

bot.on('guildMemberAdd', funtion (member) {
  let embed = new Discord.RichEmbed()
  member.guild.channels.get('705549754167328812').send('Bienvenue');
  console.log('+1')
});

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





bot.login(process.env.ContinentalCraft);
