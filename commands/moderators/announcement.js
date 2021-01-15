const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['announcement', 'announce'],
  description: 'Returns an embed with the desired information',
  permission: 'ADMINISTRATORS',

  callback: (message, arguments, text) => {
    if (arguments.length > 0) {
      let content = arguments.join(' ')
      const embed = new MessageEmbed()
        .setTitle('ANNOUNCEMENT')
        .setColor(0xff0000)
        .setDescription(content)
      message.delete()
      message.channel.send(embed)
    } else {
      message.channel.send('You have to type something, ie: "!announcement Exampletext"')
    }
  },
}
