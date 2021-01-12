const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['teams', 'splitteam', 'team'],
  description: 'Splits a team into two!',
  minArgs: 3,
  callback: (message, arguments, text) => {
    if (arguments.length > 2) {
      for (i = arguments.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = arguments[i]
        arguments[i] = arguments[j]
        arguments[j] = k
      }
      const half = Math.ceil(arguments.length / 2)
      const firstHalf = arguments.splice(0, half).join('\n')
      const secondHalf = arguments.splice(-half).join('\n')

      const embed = new MessageEmbed()
        .setTitle('Team Generator')
        .setColor(0xf051e5)
        .addFields(
          { name: 'Team 1', value: `${firstHalf}`, inline: true },
          { name: 'Team 2', value: `${secondHalf}`, inline: true }
        )
      message.delete()
      message.channel.send(embed)
    } else {
      message.channel.send('You have to name atleast 3 players')
    }
  },
}
