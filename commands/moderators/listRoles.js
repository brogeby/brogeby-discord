const Discord = require('discord.js')

module.exports = {
  commands: 'list-roles',
  description: 'List all roles',
  permission: 'MANAGE_ROLES',

  callback: async (message, arguments, text, client) => {
    let rolemap = message.guild.roles.cache.sort((a, b) => b.position - a.position).map((r) => r)
    if (rolemap.length > 1024) rolemap = 'To many roles to display'
    if (!rolemap) rolemap = 'No roles'
    const embed = new Discord.MessageEmbed().addField('Roles', rolemap)
    message.channel.send(embed)
  },
}
