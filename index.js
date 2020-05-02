const discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', asycn () =>{
  bot.user.setActivity('Hey hey hey');
});

bot.login(process.env.ContinentalCraft);
