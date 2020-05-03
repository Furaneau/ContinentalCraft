module.exports.run = async (bot, msg, args) => {

  let member = message.mentions.members.first();
 member.kick().then((member) => {
     message.channel.send(`:wave: ${member.displayName} has been kicked`);
 }).catch(() => {
     if (!message.member.hasPermission(['KICK_MEMBERS', 'Admin'])) {
         message.reply("You cannot kick members");
     } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'Admin'])) {
         message.reply("You cannont kick this member");
     }
 })
}

  module.exports.help = {
    name: 'kick'
  }
