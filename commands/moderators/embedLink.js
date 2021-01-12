const Discord = require('discord.js')

module.exports = {
  commands: 'embed',
  minArgs: 3,
  maxArgs: 4,
  expectedArgs: '<title> <url> <imageURL>',

  callback: (message, arguments, text) => {
    const title = arguments[0]
    const url = arguments[1]
    const image = arguments[2]

    const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
      .setTitle(title)
      .setURL(url)
      .setImage(image)
      .setColor('00baff')
    message.delete()
    message.channel.send(embed) // Remove the brackets <>
  },
}
