const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "destroy",
    aliases: ["dc"],
    category: "Music",
    description: "Fix The Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    voteonly: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setAuthor("| Destroyed The Player","https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61")
          return message.reply({embeds: [thing]});
	
    }
};