const Discord = require('discord.js')

module.exports = {
  commands: 'list-roles',
  description: 'List all roles',
  permission: 'MANAGE_ROLES',

  callback: async (message, arguments, text, client) => {
    // let name = ''

    // let role = ''

    // let roles = message.guild.roles.cache.forEach((role) => {
    //   name = role.name
    //   id = role.id
    //   console.log(role.name, role.id)
    // })

    let rolemap = message.guild.roles.cache.sort((a, b) => b.position - a.position).map((r) => r)
    console.log(rolemap.id)
    if (rolemap.length > 1024) rolemap = 'To many roles to display'
    if (!rolemap) rolemap = 'No roles'
    const embed = new Discord.MessageEmbed().addField('Roles', rolemap)
    message.channel.send(embed)
  },
}
