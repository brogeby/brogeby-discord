module.exports = {
  name: 'ping',
  description: 'J-O Waldner',
  execute(message, args) {
    message.channel.send('pong!')
  },
}
