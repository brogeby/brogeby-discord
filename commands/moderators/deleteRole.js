const Discord = require('discord.js')

module.exports = {
  commands: 'delete-role',
  description: 'Delete a new role',
  permission: 'MANAGE_ROLES',
  minArgs: 1,
  expectedArgs: 'Specify the name of the role',

  callback: async (message, arguments, text, client) => {
    let deleteRole = message.guild.roles.cache.find((r) => r.name == arguments[0])

    if (deleteRole) {
      deleteRole.delete('The role needed to go...')

      const embed = new Discord.MessageEmbed()
        .setTitle('Deleted role!')
        .setDescription(`${message.author.username} has deleted the role "${arguments[0]}"`)
        .setColor('#ff0f0f')
      message.channel.send(embed)
    } else {
      message.channel.send('Role does not exist')
    }
  },
}
