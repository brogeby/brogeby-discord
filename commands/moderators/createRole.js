const Discord = require('discord.js')

module.exports = {
  commands: 'create-role',
  description: 'Creates a new role',
  permission: 'MANAGE_ROLES',
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: 'Specify a name of the role and hexcolor',

  callback: async (message, arguments, text, client) => {
    const name = arguments[0]
    const color = arguments[1]
    let existingRole = message.guild.roles.cache.find((r) => r.name == arguments[0])
    // console.log(existingRole)

    if (!existingRole) {
      let newRole = await message.guild.roles
        .create({
          data: {
            name: name,
            color: color,
          },
        })
        // .then(console.log)
        .catch(console.error)

      const embed = new Discord.MessageEmbed()
        .setTitle('New role!')
        .setDescription(`${message.author.username} has created the role "${name}"`)
        .setColor(color)
      message.channel.send(embed)
    } else {
      message.channel.send('Role already exists')
    }
  },
}
