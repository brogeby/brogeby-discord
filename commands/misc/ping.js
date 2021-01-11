module.exports = {
  commands: 'ping',
  description: 'Returns a pong!',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {
    message.reply('Pong!')
  },
}
