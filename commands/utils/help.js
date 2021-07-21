const playClip = require("../../modules/audio-clip");
const Discord = require("discord.js");

module.exports = {
  name: "-help",
  description: "help commands",

  execute(message, args) {
    const embedHelp = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("DaBaby Bot Command List")
      .setAuthor(
        "DaBaby Bot Help",
        "https://i.imgur.com/bb7gfb4.jpg",
        "https://github.com/DeveloperBucket/DaBaby-Bot"
      )
      .addField("``-help voice``", 'Displays all of the bots voice commands.')
      .addField("``-help images``", 'Displays all of the bots image commands.')
      .addField("``-help songs``", 'Displays all of the bots song commands.')
      .addField("``-help moderation``", 'Coming soon!')
      .setFooter(`Requested by ${message.author.tag}`)
    
    message.reply(embedHelp);
  },
};
