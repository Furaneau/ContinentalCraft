const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const confid = require('./config.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('continentalcraft.eu');
});
new Promise((resolve, reject) => {
  setTimeout(() => reject('woops'), 500);
});

bot.on('message', async (msg) => {
      if(msg.content.startsWith(config.prefix) && !msg.author.bot){
          cmdArray = msg.content.substring(1).split("")
          cmd = cmdArray[1]
          args = cmdArray.slice(1)

          msg.channel.send(cmd)
          for(let i = 0; i < args.length; i++){
            msg.channel.send(args[i])
        }
    }
});

bot.login(process.env.ContinentalCraft);
