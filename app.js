require('dotenv').config()
const Discord = require('discord.js')
const fs = require('fs')

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

client.login(process.env.CLIENT_TOKEN)
