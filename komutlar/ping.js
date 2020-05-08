const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const db = require('quick.db');
exports.run = (client, message, args) => {


    const embedyardim = new Discord.RichEmbed()
        .setColor("GREEN")
 .setTitle(client.user.username)
  .setDescription('Anlık ping durumu: **' + client.ping + '**')
    .setColor('000000')
    .setFooter('SoulCube') 
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embedyardim)
   

    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pong","gecikme","servis"],
    permLevel: 0
};

exports.help = {
    name: 'ping',
};