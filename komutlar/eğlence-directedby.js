const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const directedby = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(``)
.addField(`<a:notfound:780682613412986881> Directed By Robert B Weide <a:notfound:780682613412986881>`)
.setImage(`https://cdn.discordapp.com/attachments/790233587495862273/792323129652281354/BoringTenseElectriceel-max-1mb.gif`)
  message.channel.send(directedby)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['robert','directedby'],
  permLevel: 0
};

exports.help = {
  name: 'directedby',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: 'directedby'
}; 