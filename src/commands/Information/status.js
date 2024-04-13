const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats", "st" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
      let fck = client.ws.ping
        const embed = new MessageEmbed()
          .setAuthor({name : `Bot's Information:`,iconURL : client.user.displayAvatarURL()})
.setColor(client.embedColor)
.setDescription('A Next-Generation Discord Music Bot With Many Awesome Features, Buttons, Menus, a Context Menu, and Customizable Settings')
.setThumbnail('https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61')
.addFields({ name: '• | Servers', value: `${scount}`, inline: false },
           { name: '• | Channels', value: `${ccount}`, inline: false },
           { name: '• | Users', value: `${mcount}`, inline: false },
           { name: '• | Discord.js', value: `${version}`, inline: false },
           { name: '• | Node', value: `${process.version}`, inline: false },
           { name: '• | Platform', value: `${os.type}`, inline: false },
           { name: '• | Uptime', value: `${duration1}`, inline: false },
           { name: '• | Ping', value: `${ccount}`, inline: false },
           { name: '• | Cores', value: `${cpu.cores}`, inline: false },
           { name: '• | Model', value: `${os.cpus()[0].model}`, inline: false },
           { name: '• | Speed', value: `${os.cpus()[0].speed}MHz`, inline: false })
.setImage('https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300')
          .setFooter({text : `Developed By : The_Extremez_Coder` , iconURL : `https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61`});
message.reply({ embeds: [embed] });
    }
}