module.exports = {
  commands: 'kick',
  description: 'Kicks a member from the discord server',
  permission: 'KICK_MEMBERS',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: 'Please tag a member to kick',

  callback: (message, arguments, text) => {
    const { guild } = message

    const member = guild.members.cache.get(target.id)
    if (member.kickable) {
      member.kick()
      message.reply(`${member} has been kicked from the server`)
      console.log(`${member} has been kicked from the server`)
    } else {
      message.reply('I cannot kick that user')
    }
  },
}
