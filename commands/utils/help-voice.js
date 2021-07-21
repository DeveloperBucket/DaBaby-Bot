const playClip = require("../../modules/audio-clip");
const Discord = require("discord.js");

module.exports = {
  name: "-help voice",
  description: "help commands",

  execute(message, args) {
    const embedHelp = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("DaBaby Bot Voice Commands")
      .setAuthor(
        "DaBaby Bot Help",
        "https://i.imgur.com/bb7gfb4.jpg",
        "https://github.com/DeveloperBucket/DaBaby-Bot"
      )
      .addField("``-lets go``", 'Joins the users voice channel and plays **LETS GO**, also sends **LETS GO** to the text channel the command was sent in!')
      .addField("``-yeah yeah``", 'Joins the users voice channel and plays **YEAH YEAH!**, also sends **YEAH YEAH!** to the text channel the command was sent in!')
      .addField("``-pull up``", 'Joins the users voice channel and plays **I PULL UP!**, also sends **I PULL UP!** to the text channel the command was sent in!')
      .addField("``-huh``", 'Joins the users voice channel and plays **HUH!**, also sends **HUH?!** to the text channel the command was sent in!')
      .addField("``-convertible``", 'Joins the users voice channel and plays ** I will turn a (word) NEIGHBOR into a convertible!**, also sends ** I will turn a (word) NEIGHBOR into a convertible!** to the text channel the command was sent in!')
      .addField("``-huh``", 'Joins the users voice channel and plays **HUH!**, also sends **HUH?!** to the text channel the command was sent in!')
      .addField("``-jetson``", 'Joins the users voice channel and plays **Oh lord, Jetson made another one**, also sends **Oh lord, Jetson made another one** to the text channel the command was sent in!')
      .addField("``-its baby``", 'Joins the users voice channel and plays **YOU KNOW ITS BABY NEIGHBOR!**, also sends **YOU KNOW ITS BABY NEIGHBOR!** to the text channel the command was sent in!')
      .addField("``-reset``", 'Forces the bot to leave the voice channel if it doesnt automatically do it')
      .setFooter(`Requested by ${message.author.tag}`)
    
    message.reply(embedHelp);
  },
};
