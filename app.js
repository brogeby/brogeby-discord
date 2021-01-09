require('dotenv').config()
const Discord = require('discord.js')
const fs = require('fs')
const roleHandler = require('./features/roleHandler')

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION'],
})
client.commands = new Discord.Collection()

// Reads all the filenames ending with .js in /commands as a command
const commandFiles = fs.readdirSync('./commands/').filter((file) => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

// Check if the bot is running
client.on('ready', () => {
  console.log('I am ready, lets do this!')
})

// Initialize commands with PREFIX and exclude BOTs
client.on('message', (message) => {
  if (message.author.bot) return
  if (message.content.indexOf(process.env.PREFIX) !== 0) return

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  if (!client.commands.has(command)) return

  try {
    client.commands.get(command).execute(message, args)
  } catch (err) {
    console.error(error)
    message.reply('There was an error trying to execute the command')
  }
})

// React to a specific message with an emoji and get assigned to a specific role
// roleHandler.getRole()
// roleHandler.removeRole()
const moviesAndSeries = '797468412800139294'
const gaming = '796769198088650753'
const marvel = '797455929146081311'
const dc = '797456004504879115'
const genshinImpact = '796768358694387713'
const pubg = '796768402236506132'
const member = '797455306812293130'
const newMember = '796779988258258996'

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji
  const member = reaction.message.guild.members.cache.get(user.id)
  if (reaction.message.id === '796786003305300079') {
    //To copy an emoji from discord, type "\" followed by the emoji, ex \:apple:, then copy and paste it
    switch (name) {
      case '👍':
        member.roles.add(member)
        member.roles.remove(newMember)
        break
      case '🎥':
        member.roles.add(moviesAndSeries)
        break
      case '🎮':
        member.roles.add(gaming)
        break
      case '❤️':
        member.roles.add(marvel)
        break
      case '💙':
        member.roles.add(dc)
        break
      case '⚜️':
        member.roles.add(genshinImpact)
        break
      case '🔫':
        member.roles.add(pubg)
        break
    }
  }
})

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji
  const member = reaction.message.guild.members.cache.get(user.id)
  if (reaction.message.id === '796786003305300079') {
    switch (name) {
      case '👍':
        member.roles.add(newMember)
        member.roles.remove(member)
        member.roles.remove(moviesAndSeries)
        member.roles.remove(gaming)
        member.roles.remove(marvel)
        member.roles.remove(dc)
        member.roles.remove(genshinImpact)
        member.roles.remove(pubg)
      case '🎥':
        member.roles.remove(moviesAndSeries)
        break
      case '🎮':
        member.roles.remove(gaming)
        break
      case '❤️':
        member.roles.remove(marvel)
        break
      case '💙':
        member.roles.remove(dc)
        break
      case '⚜️':
        member.roles.remove(genshinImpact)
        break
      case '🔫':
        member.roles.remove(pubg)
        break
    }
  }
})

client.login(process.env.CLIENT_TOKEN)
