const Discord = require('discord.js');
const proxie = require('../proxie.js')
exports.run = function(client, message) {
  
  let prefix  = proxie.prefix

const gif = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`SubZero BOT Sayaç Komutları`)
.setDescription(`


:white_small_square: **=**  \`sz!!otorol-ayarla\` : **Otorol Ayarlarsınız**
:white_small_square: **=**  \`sz!!otorol-kapat\`:  **Otorol Kapatırsınız**
:white_small_square: **=**  \`sz!!sayaç\`:  **Sayaç Ayarlarsınız**

`)
.setImage("https://cdn.discordapp.com/attachments/788683867606745095/791945335555489812/Emilia.Re_Zero.full.2220094.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(gif)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help-sayaç'], 
  permLevel: 0
};

exports.help = {
  name: "yardım-sayaç",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım-sayaç'
};