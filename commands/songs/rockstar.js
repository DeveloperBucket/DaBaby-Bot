const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "-rockstar",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/rockstar.webm");
    message.reply("Now playing Rockstar by Lord DaBaby!");
  },
};
