const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MediaCommand extends BaseCommand {
  constructor() {
    super('media', 'information', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
    .setUrl('https://www.youtube.com/channel/UCaofLQ3yliL5LWIqHSOGo9g')
    .setThumbnail('https://yt3.ggpht.com/yti/ANoDKi7PloVtdApDt0QzGecB9IwuGch3PgMdyaNep_XK=s88-c-k-c0x00ffffff-no-rj-mo')
    .setColor('#b31217')
    .setField('Check out IMINAGHETO\'s Youtube Channel.')
    .setTimestomp()
    .setFooter("IMINAGHETTO", "https://yt3.ggpht.com/yti/ANoDKi7PloVtdApDt0QzGecB9IwuGch3PgMdyaNep_XK=s88-c-k-c0x00ffffff-no-rj-mo");
  }
}