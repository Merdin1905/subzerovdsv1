const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
.setColor('#ffffff')
.setDescription(`SubZero Botu Kullanırken <@772067487902466078> Rolünü Yukarıya Çıkartın Yoksa Guard Komutları Çalışmaz`)
  .addField(`:scroll:  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`<a:dev:781488713728524338> » Yapımcı`, `Merdin#0001 <@768059323951087636>`,true)
  .addField(`<a:dev:781488713728524338> » Geliştirici`, `✽『Kurucu』✽#4329 <@468093739689312257>`,true)
  .addField(`<:node:792113513966469160> Node.js`, `${process.version}`, true)
.addField(`<:dscjs:781434303745228830> Discord.js`, `${Discord.version}`, true)
 .addField(`<:kanal:792113435110408262> Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`<:kul:790509849699811338> Kullanıcı Sayısı`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
 .addField(`<:su:790509858973155328> Sunucu Sayısı`, `${client.guilds.cahce.size} `, true)
.addField(`<a:ayarlar:781489548882214913> Komut Sayısı`, `${client.commands.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/4e7RSTyQGH) | [Davet Linki](https://discord.com/oauth2/authorize?client_id=772067487902466078&scope=bot&permissions=8&scope=bot&permissions=8)`, true)
.setImage(`https://cdn.discordapp.com/attachments/788683867606745095/791945335555489812/Emilia.Re_Zero.full.2220094.gif`)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 