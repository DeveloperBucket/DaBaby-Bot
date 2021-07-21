const playClip = require("../../modules/audio-clip");
const Discord = require("discord.js");

module.exports = {
  name: "-help songs",
  description: "help commands",

  execute(message, args) {
    const embedHelp = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("DaBaby Bot Song Commands")
      .setDescription("**__Must be in a voice channel for these to work.__**")
      .setAuthor(
        "DaBaby Bot Help",
        "https://i.imgur.com/bb7gfb4.jpg",
        "https://github.com/DeveloperBucket/DaBaby-Bot"
      )
      .addField("``-rockstar``", 'Praise DaBaby with this song!')
      .addField("``-suge``", 'Get on your knees while playing this.')
      .addField("``-ball``", 'This is the Lords song, pray while listening to it.')
      .addField("``-texas``", 'Plays Walker Texas Ranger.')
      .addField("``-redlight``", 'Are you even getting head at the red light?!')
      .addField("``-masterpiece``", 'The ultimate Masterpiece.!')
      .addField("``-reset``", 'Forces the bot to leave the voice channel if it doesnt automatically do it')
      .setFooter(`Requested by ${message.author.tag}`)
    
    message.reply(embedHelp);
  },
};
