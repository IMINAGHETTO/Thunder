const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send('No perm!');
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I need perm');

    const role = message.guild.roles.cache.get('800010437449613342');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;

    await lockChannel.updateOverwrites(role, {
      SEND_MESSAGES: false
    }).catch(err => console.log(err));
    message.channel.send('I have locked this channel');

  }
}