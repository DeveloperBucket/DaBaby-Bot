const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "-masterpiece",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/masterpiece.webm");
    message.reply("Now playing Masterpiece by Lord DaBaby!");
  },
};
