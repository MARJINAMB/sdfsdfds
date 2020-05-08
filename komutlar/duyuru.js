const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send(":x: Hata bir kanal etiketlemelisini@!");
  if(!duyurumetni) return message.channel.send(":x: Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send(":ballot_box_with_check: Başarıyla duyuruldu!");
   kanal.createWebhook("SoulCube - Duyuru", "https://cdn.discordapp.com/attachments/684098937350914055/686690922226122807/Kalp.png")
    .then(webhook => webhook.edit("SoulCube - Duyuru", "https://cdn.discordapp.com/attachments/684098937350914055/686690922226122807/Kalp.png")
        .then(wb => {       const duyurucuPing = new Discord.WebhookClient(wb.id, wb.token);
            duyurucuPing.send(duyurumetni + "\n@everyone")
            duyurucuPing.delete()
             .setColor("00000")

        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

module.exports.help = {
  name: 'duyuru',
  description: 'Duyurucu ping',
  usage: 'Ping Was Here'
};