const Discord = require('discord.js');
const proxie = require('../proxie.js')
exports.run = function(client, message) {
  
  let prefix  = proxie.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`SubZero BOT Yardım Menüsü`)
.setDescription(`

:white_small_square: \`Yardım Menüleri\` **Botun Yardım Menüleri** :white_small_square:

:white_small_square: **=**  \`sz!!yardım-koruma\` : **Koruma Komutlarını Listeler**
:white_small_square: **=**  \`sz!!yardım-eğlence\`:  **Eğlence Komutlarını Listeler**
:white_small_square: **=**  \`sz!!yardım-gif\`:  **Gif Komutlarını Listeler**
:white_small_square: **=**  \`sz!!yardım-sayaç\`: **Sayaç Ve Otorol Komutlarını Listeler**

:white_small_square: \`Genel Komutlar\` **Genel Komutlar** :white_small_square:

:white_small_square: **=**  \`sz!!İstatistik\`: **Botun İstatistigini Gösterir**
:white_small_square: **=**  \`sz!!ping\`: **Botun Ping'ini Gösterir**
:white_small_square: **=**  \`sz!!avatar\`: **Kullanıcının Avatarını Gösterir**

`)
.setImage("https://cdn.discordapp.com/attachments/788683867606745095/791945335555489812/Emilia.Re_Zero.full.2220094.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};