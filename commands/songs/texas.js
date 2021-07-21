const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "-texas",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/texasranger.webm");
    message.reply("Now playing Walker Texas Ranger by Lord DaBaby!");
  },
};
