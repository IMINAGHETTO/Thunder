const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;

    const mentionedMember = message.mentions.members.first();
    const role = message.guild.roles.cache.get('800010358760538124');
    if (mentionedMember) {
      if (mentionedMember.role.has(role.id)) {
        const noEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag} please do NOT attempt to ping this user.`)
          .setColor('RED')
          .setImage('https://i.gifer.com/1tx.gif')
    await message.channel.reply(noEmbed);
      }
    }


    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}