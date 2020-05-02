const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () =>{
  bot.user.setActivity('Papy Gelus raconte nous une histoire');
});

bot.login(process.env.ContinentalCraft);
