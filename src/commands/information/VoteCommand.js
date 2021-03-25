const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class VoteCommand extends BaseCommand {
  constructor() {
    super('vote', 'information', []);
  }

  async run(client, message, args) {
    const filter = m => m.author.id == message.author.id;
    let embed = new Discord.MessageEmbed();

    message.channel.send('Care este subiectul votului?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.setTitle(msg.first().content);
    }     catch (err) {
      console.log(err);
     message.channel.send('Ai ramas fara timp. Foloseste comanda inca o data');
}

    message.channel.send('Care este prima varianta de vot?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.addField('[🔴] Prima optiune este:', msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Ai ramas fara timp. Foloseste comanda inca o data');
    }

    message.channel.send('Care este a doua varianta de vot?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.addField('[🔵] A doua optiune este:', msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Ai ramas fara timp. Foloseste comanda inca o data');
    } 
    message.channel.send(embed).then(sentMessage => sentMessage.react('🔴')).then(reaction => reaction.message.react('🔵'));


  }
}