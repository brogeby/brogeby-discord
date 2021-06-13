const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
require('dotenv').config()
const loadCommands = require('./commands/load-commands')
const loadFeatures = require('./features/load-features')

require('events').EventEmitter.defaultMaxListeners = 20

client.on('ready', async () => {
  console.log('The client is a n00b!')
  loadCommands(client)
  loadFeatures(client)
})

client.login(process.env.CLIENT_TOKEN)
