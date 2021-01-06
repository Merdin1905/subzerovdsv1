const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const notfound = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(``)
.addField(`<a:notfound:780682613412986881> 404 Not Found <a:notfound:780682613412986881>`)
.setImage(`https://cdn.discordapp.com/attachments/790233587495862273/792318858388176896/200_d.gif`)
  message.channel.send(notfound)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['notfound','error'],
  permLevel: 0
};

exports.help = {
  name: 'notfound',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: 'notfound'
}; 