const axios = require('axios')

module.exports = {
  commands: 'dog',
  description: 'Returns a dog!',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {
    axios
      .get('https://random.dog/woof.json?filter=mp4,webm')
      .then((res) => {
        // console.log(res)
        message.reply(res.data.url)
      })
      .catch((err) => console.error(err))
  },
}
