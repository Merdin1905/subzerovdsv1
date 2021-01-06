const Discord = require('discord.js');
const proxie = require('../proxie.js')
exports.run = function(client, message) {
  
  let prefix  = proxie.prefix

const gif = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`SubZero BOT Gif Komutları`)
.setDescription(`


:white_small_square: **=**  \`sz!!gif-ara\` : **Gif Aramanıza Yara**
:white_small_square: **=**  \`sz!!gif-woman\`:  **Kadın Gif Atar**
:white_small_square: **=**  \`sz!!gif-man\`:  **Erkek Gif Atar**
:white_small_square: **=**  \`sz!!gif-couple\`:  **Sevgili Gif Atar**
:white_small_square: **=**  \`sz!!gif-anime\`:  **Anime Gif Atar**
:white_small_square: **=**  \`sz!!gif-animal\`:  **Hayvan Gif Atar**

`)
.setImage("https://cdn.discordapp.com/attachments/788683867606745095/791945335555489812/Emilia.Re_Zero.full.2220094.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(gif)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help-gif'], 
  permLevel: 0
};

exports.help = {
  name: "yardım-gif",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım-gif'
};