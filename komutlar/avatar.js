const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let kullanıcı = message.mentions.users.first() || (args.length > 0 ? client.users.cache.filter(e => e.id.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author
    const avatar = new Discord.MessageEmbed()
        .setColor(client.conf.renk)
        .setAuthor(kullanıcı.username)
        .setImage(kullanıcı.displayAvatarURL({dynamic: true})
        .replace(`webp`, `png`))
        .setFooter(message.author.tag+ ` Tarafından istendi!`)
        .setDescription(`[Resim linki](${kullanıcı.displayAvatarURL({dynamic: true})
        .replace(`webp`, `png`)})`)
    message.channel.send(avatar)
    
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım','pp'],
    kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  isim: 'Avatar',
  süre: 'Yok',

  description: 'Avatarınızı gösterir ve ya birini etiketlerseniz o kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'
};