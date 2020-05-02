const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const confid = require('./config.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('continentalcraft.eu');
});

bot.on('message', async (msg) => {
    if(msg.content == 'Hey'){
      msg.channel.send('Coucou !!!')

    }
});

bot.on('message', async (msg) => {
  if(msg.content.startWith(config.prefix) && !msg.author.bot){
      cmdArray = msg.content.substring(1).split()
      cmd = cmdArray[0]
      args = cmdArray.slice(1)

      msg.channel.send(cmd)
   }
});

bot.login(process.env.ContinentalCraft);
