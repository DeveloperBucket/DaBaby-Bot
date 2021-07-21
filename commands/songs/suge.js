const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "-suge",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/suge.webm");
    message.reply("Now playing Suge by Lord DaBaby!");
  },
};
