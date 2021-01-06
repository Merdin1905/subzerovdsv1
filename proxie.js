const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const moment = require("moment");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const Jimp = require("jimp");
const db = require("quick.db");
require("./util/eventLoader.js")(client);
const logs = require("discord-logs");
logs(client);
const ms = require("ms");

client.conf = {
  token: "NzcyMDY3NDg3OTAyNDY2MDc4.X51R4Q.JFWmBDOz80etrfZmnw1eWg_RzwU",
  prefix: "sz!!",
  sahip: "768059323951087636",
  durum: "online", // STATUS
  renk: `ffffff`, // EMBED COLOR
  botadı: "SubZero", // BOT NAME
  davetlinki:
    "https://discord.com/oauth2/authorize?client_id=772067487902466078&scope=bot&permissions=8", //İNVİTE LİNK
  desteklinki: "https://discord.gg/4e7RSTyQGH", // SUPPORT SERVER LİNK
  oylinki: "https://top.gg/bot/772067487902466078/vote" // DBL VOTE LİNK
};
var prefix = client.conf.prefix;
client.avatarURL =
  "https://cdn.discordapp.com/avatars/772067487902466078w/1dbbe038772cfd9d50131bfa668466f0.png?size=2048"; //optional

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.cache.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.cache.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.cache.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.cache.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === client.conf.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", function(e) {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", function(e) {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

// GİRİŞ ÇIKIŞ \\

// GİRİŞ ÇIKIŞ \\
client.login(client.conf.token);

//---------------------------------KOMUTLAR---------------------------------\\

client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

  if (rol) {
    const guild = channel.guild.cache;
    let channelp = channel.parentID;

    channel.clone().then(z => {
      let kanal = client.guild.channels.find(c => c.name === z.name);
      kanal.setParent(
        kanal.guild.channels.find(channel => channel.id === channelp)
      );
    });
  }
});

//reklam
client.on("message", async message => {
  const lus = await db.fetch(`reklam_${message.guild.id}`);
  if (lus) {
    const reklamengel = [
      "discord.app",
      "discord.gg",
      ".party",
      ".com",
      ".az",
      ".net",
      ".io",
      ".gg",
      ".me",
      "https",
      "http",
      ".com.tr",
      ".org",
      ".tr",
      ".gl",
      "glicht.me/",
      ".rf.gd",
      ".biz",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          return message
            .reply("Hey Dur! Bu Sunucuda Reklamı Engelliyorum")
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});
client.on("messageUpdate", async message => {
  const lus = await db.fetch(`reklam_${message.guild.id}`);
  if (lus) {
    const reklamengel = [
      "discord.app",
      "discord.gg",
      ".party",
      ".com",
      ".az",
      ".net",
      ".io",
      ".gg",
      ".me",
      "https",
      "http",
      ".com.tr",
      ".org",
      ".tr",
      ".gl",
      "glicht.me/",
      ".rf.gd",
      ".biz",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          return message
            .reply("Hey Dur! Bu Sunucuda Reklamı Engelliyorum")
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});
//kick
client.on("message", async message => {
  const lus = await db.fetch(`reklamkick_${message.guild.id}`);
  let sayı = await db.fetch(`sayı_${message.author.id}`);
  let a = message.author;
  if (lus) {
    const reklamengel = [
      "discord.app",
      "discord.gg",
      ".party",
      ".com",
      ".az",
      ".net",
      ".io",
      ".gg",
      ".me",
      "https",
      "http",
      ".com.tr",
      ".org",
      ".tr",
      ".gl",
      "glicht.me/",
      ".rf.gd",
      ".biz",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();
          db.add(`sayı_${message.author.id}`, 1);
          if (sayı == null) {
            const sa = new Discord.MessageEmbed().setDescription(
              `Hey! <@${message.author.id}> Bu İlk Uyarın Lütfen Tekrarlama!`
            );
            message.channel.send(sa);
            message.delete();
            a.send(`Bu İlk Uyarın Lütfen Tekrarlama`);
            return;
          }
          if (sayı === 1) {
            const sa = new Discord.MessageEmbed().setDescription(
              `Hey! <@${message.author.id}> Bu İkinci Uyarın Lütfen Tekrarlama!`
            );
            message.channel.send(sa);
            message.delete();
            a.send(`Bu İkinci Uyarın Lütfen Tekrarlama`);
            return;
          }
          if (sayı > 2) {
            const sa = new Discord.MessageEmbed().setDescription(
              `Hey! <@${message.author.id}> Reklamdan Dolayı Kickledim!`
            );
            message.channel.send(sa);
            message.delete();
            a.send(
              `${message.guild.name} Sunucusundan Reklam Yaptığın İçin Kicklendin!`
            );
            db.delete(`sayı_${message.author.id}`);
            message.guild.member(a).kick();
            return;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});

//////////////////////////////BotAtack/////////////////////////////////////////////////

client.on("guildMemberAdd", async member => {
  let a = await db.fetch(`r_${member.guild.id}`);
  if (a) {
    const guild = member.guild;

    let channels = member.guild.channels.cache.find(
      c => c.name === "kanal adı"
    );

    if (member.user.bot !== true) {
    } else {
      channels
        .send(`Sunucumza Bot Geldıgı Icın Banlandı`)
        .then(() => console.log(`yasaklandı ${member.displayName}`))
        .catch(console.error);
      member.ban(member);
    }
  }
});
//// KÜFÜR
client.on("message", async message => {
  const lus = await db.fetch(`küfür_${message.guild.id}`);
  if (lus) {
    const reklamengel = ["amk", "oç", "orrrrrrrrrrr"];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          return message
            .reply("Hey Dur! Bu Sunucuda Küfür Engelliyorum")
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});
client.on("messageUpdate", async message => {
  const lus = await db.fetch(`küfür_${message.guild.id}`);
  if (lus) {
    const reklamengel = ["amk", "oç", "orrrrrrrrrrr"];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          return message
            .reply("Hey Dur! Bu Sunucuda Küfürü Engelliyorum")
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});
//modlog
client.on("messageDelete", async message => {
  let a = await db.fetch(`modlog_${message.guild.id}`);
  if (a) {
    const sa = new Discord.MessageEmbed()
      .setTitle("Mesaj Silindi")
      .setDescription(
        ` **${message.author.tag}** a ait **${message.content}** adlı mesajı silindi`
      )
      .setTimestamp();
    client.channels.cache.get(a).send(sa);
  }
});
client.on("channelDelete", async channel => {
  let a = await db.fetch(`modlog_${channel.guild.id}`);
  if (a) {
    const sa = new Discord.MessageEmbed()
      .setTitle("Kanal Silindi")
      .setDescription(`**${channel.name}** Adlı Kanal Silindi!`)
      .setTimestamp();
    client.channels.cache.get(a).send(sa);
  }
});
client.on("channelCreate", async channel => {
  let a = await db.fetch(`modlog_${channel.guild.id}`);
  if (a) {
    const sa = new Discord.MessageEmbed()
      .setTitle("Kanal Oluşturuldu")
      .setDescription(`**${channel.name}** Adlı Kanal Oluşturuldu!`)
      .setTimestamp();
    client.channels.cache.get(a).send(sa);
  }
});
//sa as
client.on("message", async message => {
  let a = await db.fetch(`saas_${message.guild.id}`);
  if (a) {
    if (message.content.toLowerCase() === "sa") {
      message.channel.send(
        new Discord.MessageEmbed().setDescription(`Aleyküm Selam Hoşgeldin!`)
      );
    }
  }
});
/////Rol Koruma
client.on("roleDelete", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({
    data: {
      name: role.name,
      color: role.color,
      hoist: role.hoist,
      permissions: role.permissions,
      mentionable: role.mentionable,
      position: role.position
    },
    reason: "Silinen Rol Açıldı."
  });
});
client.on("roleCreate", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  role.delete();
});

// DDOS KORUMA \\
client.on("message", msg => {
  if (client.ping > 2500) {
    let bölgeler = [
      "singapore",
      "eu-central",
      "india",
      "us-central",
      "london",
      "eu-west",
      "amsterdam",
      "brazil",
      "us-west",
      "hongkong",
      "us-south",
      "southafrica",
      "us-east",
      "sydney",
      "frankfurt",
      "russia"
    ];
    let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
    let sChannel = msg.guild.channels.find(c => c.name === "ddos-system");

    sChannel.send(
      `Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ <:tik:792422017713831976> __**Sunucu Pingimiz**__ :` +
        client.ping
    );
    msg.guild
      .setRegion(yenibölge)
      .then(g => console.log(" bölge:" + g.region))
      .then(g => msg.channel.send("bölge **" + g.region + " olarak değişti"))
      .catch(console.error);
  }
});
// DDOS KORUMA \\

// OTOROL \\
client.on("guildMemberAdd", async member => {
  let kanal = db.fetch(`judgekanal_${member.guild.id}`);
  let rol = db.fetch(`judgerol_${member.guild.id}`);
  let mesaj = db.fetch(`judgemesaj_${member.guild.id}`);

  if (!kanal) return;
  member.roles.add(rol);
  client.channels.cache
    .get(kanal)
    .send(
      "<:duyuru:793030802798936094> **`" +
        member.user.username +
        "`** Adlı Kullanıcı Sunucuya Katıldı Rol Verildi Seninle Beraber `" +
        member.guild.memberCount +
        "` <:tk:793011913813655573>"
    );
});
// OTOROL \\

//SAYAÇ \\
client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  if (member.guild.memberCount >= sayac) {
    member.guild.channels.cache
      .get(skanal)
      .send(
        ` <:duyur:793030802798936094> **${
          member.user.tag
        }** Sunucuya **Katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` Kullanıcı Oldu Sayaç Başarıyla Sıfırlandı.`
      );
    db.delete(`sayac_${member.guild.id}`);
    db.delete(`sayacK_${member.guild.id}`);
    return;
  } else {
    member.guild.channels.cache
      .get(skanal)
      .send(
        ` <:tk:793011913813655573> **${
          member.user.tag
        }**  Adlı Kullanıcı Sunucuya **Katıldı** \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` Kullanıcı Olmaya  \`${db.fetch(`sayac_${member.guild.id}`) -
          member.guild.memberCount}\` Kullanıcı Kaldı. \`${
          member.guild.memberCount
        }\` Kişiyiz!`
      );
  }
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  member.guild.channels.cache
    .get(skanal)
    .send(
      ` <:red:793011930393739264> **${
        member.user.tag
      }** Adlı Kullanıcı Sunucudan **Ayrıldı** \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` Kullanıcı Olmaya \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` Kullanıcı Kaldı. \`${
        member.guild.memberCount
      }\` Kişiyiz!`
    );
});
//SAYAÇ \\

// SESTE \\

// ŞİMDİLİK YOK \\

// SESTE \\

client.on("guildMemberAdd", async member => {
  const fs = require("fs");
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    else if (member.user.tag.length > 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 430, 170, member.user.tag);
    await userimg.resize(362, 362);
    await bg.composite(userimg, 43, 26).write("./img/" + member.id + ".png");
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
    }, 1000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 10000);
  }
});

client.on("guildMemberRemove", async member => {
  const fs = require("fs");
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    else if (member.user.tag.length > 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 430, 170, member.user.tag);
    await userimg.resize(362, 362);
    await bg.composite(userimg, 43, 26).write("./img/" + member.id + ".png");
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
    }, 1000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 10000);
  }
});

// HERKESE ROLVER 
client.on('message', msg => {
    if (msg.content === "<RolVer") {
    if (msg.member.hasPermission('MANAGE_ROLES')) {
    let role = msg.guild.roles.find(r => r.name == "Üye");
    if (!role)
      return msg.channel.send(`Hey **${msg.author.username}**, **${role.name}** isimli rolü bulamadım!`);
    msg.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role));
    msg.channel.send(`Hey **${msg.author.username}**, **${role.name}** isimli rolü tüm üyelere verdim.\nBiraz beklemen gerekecek o kadar...`);
    } else {
      msg.channel.send("Bu komutu kullanabilmek için `Rolleri Yönet` yetkisine ihtiyacın var!")
    }
  };
});

// HERKESE ROLVER