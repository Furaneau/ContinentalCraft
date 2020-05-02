const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


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

server.post('/api/messages', [
    function(req,res, next){
        console.log('RemoteAddress: ', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
        next();
    },
    connector.listen()
]);


bot.login(process.env.ContinentalCraft);
