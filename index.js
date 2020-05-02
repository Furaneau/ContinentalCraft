const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('continentalcraft.eu');
});

bot.login(process.env.ContinentalCraft);
