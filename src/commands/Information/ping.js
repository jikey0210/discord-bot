const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {
      
  

  const Chup = new MessageEmbed()
    .setDescription(`📶 | Ping: ${client.ws.ping}ms`,)
.setColor("#2f3136")
    
message.reply({ embeds: [Chup] }) 
  
  
 }
 }
