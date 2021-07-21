const fs = require("fs");
const Discord = require("discord.js");
require("dotenv").config();



const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync("./commands");

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on('ready', () => {
    console.log('LETS GO!')
    client.user.setActivity('-help | LETS GO!')
});




client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.substring(0, 1) === "-") {
    try {
      client.commands.get(message.content).execute(message);
    } catch (error) {
      message.reply(`${message.content} is not a valid command. Run **__-help__** to see all the commands.`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
