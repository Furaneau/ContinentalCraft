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

const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

  if(!message.guild.member(message.author).hasPermission("KiCK_MEMBERS")) return message.channel.send(`Vous avez pas les perm`);

  if(message.mention.user.size === 0) {
    return message.channel.send(`Aucune personne`);
  }

  let kick = message.guild.member(message.mention.user.first())

  if(!kick){
    return message.channel.send(`Pas de joueur`);
  }

  if(!message.guild.member(client.user).hasPermission("KiCK_MEMBERS"))return message.channel.send(`Manque de permision`);

  kick.kick().then(member => {
    message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
  });
};

module.exports.config = {
  name: "kick"
};

bot.login(process.env.ContinentalCraft);
