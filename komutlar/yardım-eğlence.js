const Discord = require('discord.js');
const proxie = require('../proxie.js')
exports.run = function(client, message) {
  
  let prefix  = proxie.prefix

const eğlence = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`SubZero BOT Eğlene Komutları`)
.setDescription(`


:white_small_square: **=**  \`sz!!directedby\` : **Dşrected By Robert B Weide**
:white_small_square: **=**  \`sz!!404\` : **404 Not Found Error**
:white_small_square: **=**  \`sz!!8ball\` : **8ball**
:white_small_square: **=**  \`sz!!adamasmaca\`:  **Adam Asmaca Oyunu**
:white_small_square: **=**  \`sz!!duello\` :  **Duello Atarsın**
:white_small_square: **=**  \`sz!!slots\`:  **Slots**
:white_small_square: **=**  \`sz!!stresçarkı\`:  **Stres Çarkı Çevir Stresi At**
:white_small_square: **=**  \`sz!!woodie\`:  **Woodie :D**
:white_small_square: **=**  \`sz!!yazıtura\`:  **Yazı'mı Tura'mı**
:white_small_square: **=**  \`sz!!öp\`:  **Öpücük Kondur**
:white_small_square: **=**  \`sz!!yetkilerim\`:  **Yetkileriniz**

`)
.setImage("https://cdn.discordapp.com/attachments/788683867606745095/791945335555489812/Emilia.Re_Zero.full.2220094.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(eğlence)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help-fun'], 
  permLevel: 0
};

exports.help = {
  name: "yardım-eğlence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım-eğlence'
};