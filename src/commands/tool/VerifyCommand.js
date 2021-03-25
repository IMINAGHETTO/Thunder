const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'tool', []);
  }

  async run(client, message, args) {
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channe.send("I require \'MANAGE_ROLES\' permission.");

    const role = message.guild.roles.cache.get('810469064077738007');

    await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}