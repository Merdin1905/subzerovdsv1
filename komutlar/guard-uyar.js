const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let a = message.mentions.users.first()
let sebep = args.slice(1).join(' ')
let sa = await db.fetch(`uyarısayısı_${a.id}`)
if (sa == null) sa = '0'
if (!a || !sebep) return message.channel.send(`Kişi Ve Sebep Belirt`)
  message.channel.send(`Kullanıcı Uyarıldı Bu Onun ${sa}. Uyarılışı! <:tk:793011913813655573>`)
  
  db.add(`uyarısayısı_${a.id}`, 1)
a.send(` ${message.guild.name} Sunucusundan ${message.author.tag} Adlı Yetkili Tarafından ${sebep} Sebebinden Dolayı Uyarıldın! Bu Senin ${sa}. Uyarılışın <:dikkat:793017422595883020>`)
  message.guild.owner.send(` ${message.guild.name} Sunucusundan ${message.author.tag} Adlı Yetkili ${a} Adlı Kullanıcıyı ${sebep} Sebebinden Dolayı Uyardı! Bu Kullanıcının ${sa}. Uyarısı <:tk:793011913813655573>`)
  
 
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'uyar'
}; 