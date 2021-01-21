const Discord = require('discord.js')

module.exports = {
  commands: ['clear-channel', 'cc'],
  description: 'Clears the channel for 99 messages at a time',
  permission: 'ADMINISTRATOR',

  callback: async (message, arguments, text, client) => {
    await message.channel
      .bulkDelete(99, true)
      .then(console.log(`Deleting messages in ${message.channel}`))
      .then(
        message.channel.send(`${message.author.username} has cleared the channel from messages`)
      )
      .catch((err) => console.error(err))
  },
}
