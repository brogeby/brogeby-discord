const Discord = require('discord.js')

module.exports = {
  commands: 'set-bot-status',
  description: 'Sets the status of the bot',
  permission: 'ADMINISTRATOR',
  minArgs: 2,
  maxArgs: 2,
  expectedArgs:
    'Specify the type of activity and what game/program it is using. Valid types are: PLAYING, STREAMING, LISTENING, WATCHING, COMPETING',

  callback: async (message, arguments, text, client) => {
    client.user.setActivity(arguments[1], {
      type: arguments[0],
    })
  },
}
