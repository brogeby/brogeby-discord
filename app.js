const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()
const loadCommands = require('./commands/load-commands')

client.on('ready', async () => {
  console.log('The client is ready!')

  loadCommands(client)
})

client.login(process.env.CLIENT_TOKEN)

// // React to a specific message with an emoji and get assigned to a specific role
// const moviesAndSeries = '797468412800139294'
// const gaming = '796769198088650753'
// const marvel = '797455929146081311'
// const dc = '797456004504879115'
// const genshinImpact = '796768358694387713'
// const pubg = '796768402236506132'
// const member = '797455306812293130'
// const newMember = '796779988258258996'

// client.on('messageReactionAdd', (reaction, user) => {
//   const { name } = reaction.emoji
//   const member = reaction.message.guild.members.cache.get(user.id)

//   if (reaction.message.id === '796786003305300079') {
//     //To copy an emoji from discord, type "\" followed by the emoji, ex \:apple:, then copy and paste it
//     switch (name) {
//       case '🎥':
//         member.roles.add(moviesAndSeries)
//         break
//       case '🎮':
//         member.roles.add(gaming)
//         break
//       case '❤️':
//         member.roles.add(marvel)
//         break
//       case '💙':
//         member.roles.add(dc)
//         break
//       case '⚜️':
//         member.roles.add(genshinImpact)
//         break
//       case '🔫':
//         member.roles.add(pubg)
//         break
//     }
//   }
// })

// client.on('messageReactionRemove', (reaction, user) => {
//   const { name } = reaction.emoji
//   const member = reaction.message.guild.members.cache.get(user.id)

//   if (reaction.message.id === '796786003305300079') {
//     switch (name) {
//       case '🎥':
//         member.roles.remove(moviesAndSeries)
//         break
//       case '🎮':
//         member.roles.remove(gaming)
//         break
//       case '❤️':
//         member.roles.remove(marvel)
//         break
//       case '💙':
//         member.roles.remove(dc)
//         break
//       case '⚜️':
//         member.roles.remove(genshinImpact)
//         break
//       case '🔫':
//         member.roles.remove(pubg)
//         break
//     }
//   }
// })
