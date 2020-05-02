const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const confid = require('./config.js');

process.on('unhandledRejection', function(err) {
    console.log(err);
    // sendInTheCalvary(err);
});

const promise1 = new Promise(function(resolve, reject) {
    throw new Error('Promise 1 has tanked.');
});

const promise2 = new Promise(function(resolve, reject) {
    promise1.then();
});

(async function() {
    try {
        await promise2;
    } catch(err) {
        console.log(err);
    }
})();

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('continentalcraft.eu');
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
