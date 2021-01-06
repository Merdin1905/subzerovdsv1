const Discord = require('discord.js');
const proxie = require('../proxie.js')
exports.run = function(client, message) {
  
  let prefix  = proxie.prefix

const guard = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`SubZero BOT Guard Komutları`)
.setDescription(`


:white_small_square: **=**  \`sz!!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`sz!!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`sz!!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`sz!!rol-koruma\` :  **Rol Koruma Aç/Kapat**
:white_small_square: **=**  \`sz!!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`sz!!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`sz!!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**

`)
.setImage("https://cdn.discordapp.com/attachments/788683867606745095/791945335555489812/Emilia.Re_Zero.full.2220094.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(guard)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help-guard'], 
  permLevel: 0
};

exports.help = {
  name: "yardım-koruma",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım-koruma'
};