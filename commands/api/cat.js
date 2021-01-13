const axios = require('axios')

module.exports = {
  commands: 'cat',
  description: 'Returns a cat!',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then((res) => {
        message.reply(res.data[0].url)
      })
      .catch((err) => console.error(err))
  },
}
