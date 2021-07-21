const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "-ball",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/ball.webm");
    message.reply("Now playing Ball If I Want To by Lord DaBaby!");
  },
};
