// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const WelcomeChannel = member.guild.channels.cache.get('822464432273227866');
    WelcomeChannel.send(`<@${member.user.id}>, bine ai venit pe Thunder Romania Roleplay. Nu uita sa intri si pe serverul de fivem!`);
  }
}