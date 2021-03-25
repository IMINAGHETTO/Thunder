const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message, args) {
    //*nuke reason
    //Permission Checking:
    if (!message.member.hasPermission("MANNAGE_CHANNELS")) return message.channel.send("You cannot use this command!");
    if (!message.guild.me.hasPermission("MANNAGE_CHANNELS")) return message.channel.send("I don't have permission!");
  
    //Variables
    let reason = args.join(" ");
    const nukeChannel = message.channel;

    //Input
    if (!reason) reason = "No reason given.";
    if (!nukeChannel.deletable) return message.channel.send("This channel is not deletable!");

    //Executing
    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete(reason).catch(err => console.log(err));
    
  }
}