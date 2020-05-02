const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('continentalcraft.eu');
});

bot.on('message', async (msg) => {
      if(msg.content.startsWith(config.prefix) && !msg.author.bot){
          cmdArray = msg.content.substring(1).split(" ")
          cmd = cmdArray[0]
          args = cmdArray.slice(1)

            if(cmd =='ping'){
                msg.channel.send("pong.")

        }
    }
});

bot.on('message', async (msg) => {

  if(!msg.guild.member(msg.author).hasPermission("KiCK_MEMBERS")) return msg.channel.send(`Vous avez pas les perm`);

  if(msg.mention.user.size === 0) {
    return msg.channel.send(`Aucune personne`);
  }

  let kick = msg.guild.member(msg.mention.user.first());

  if(!kick){
    return msg.channel.send(`Pas de joueur`);
  }

  if(!msg.guild.member(client.user).hasPermission("KiCK_MEMBERS"))return msg.channel.send(`Manque de permision`);

  kick.kick().then(member => {
    msg.channel.send(`${msg.user.username} est kick par ${msg.author.username}`);
  });
});

module.exports = config {
  name: "kick"
};

bot.login(process.env.ContinentalCraft);
