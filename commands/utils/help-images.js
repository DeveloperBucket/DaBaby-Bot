const playClip = require("../../modules/audio-clip");
const Discord = require("discord.js");

module.exports = {
  name: "-help images",
  description: "help commands",

  execute(message, args) {
    const embedHelp = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("DaBaby Bot Image Commands")
      .setAuthor(
        "DaBaby Bot Help",
        "https://i.imgur.com/bb7gfb4.jpg",
        "https://github.com/DeveloperBucket/DaBaby-Bot"
      )
      .addField("``-dababy``", 'Sends sexy picture of Lord DaBaby.')
      .addField("``-dababy bed``", 'Sends picture of <@840237393835327498>s bed.')
      .addField("``-dababy boat``", 'Sends picture of the official DaBaby boat!')
      .addField("`-dababy car`", 'Sends picture of the **ACTUAL** DaBaby-mobile.')
      .addField("`-dababy pirate`", 'DaBaby Pirate?!')
      .addField("`-dababy shrek`", 'DaBaby Shrek?!')
      .addField("`-dababy brazilian`", 'Brazilian DaBaby!!')
      .addField("`-dababy russian`", 'DaBaby is now Russian?!')
      .addField("`-dababy chinese`", 'Chinese is **NOT** DaBaby.')
      .addField("`-dababy mexican`", 'DaBaby visits Mexico!')
      .addField("`-dababy italian`", 'Dababy goes to Italy?!')
      .addField("`-dababy portuguese`", 'Not possible.')
      .setFooter(`Requested by ${message.author.tag}`)
    
    message.reply(embedHelp);
  },
};
