const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "-redlight",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/redlight.webm");
    message.reply("Now playing Red Light Green Light by Lord DaBaby!");
  },
};
