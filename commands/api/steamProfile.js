const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
  commands: 'steam-profile',
  description: 'Returns a profile from Steam based on what ID you provide',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs:
    '<ID> || Provide the ID for the profile which is the last numbers in the URL when you are visiting your own profile on https://steamcommunity.com/',

  callback: (message, arguments, text) => {
    const profileId = arguments[0]
    axios
      .get(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${profileId}`
      )
      .then((res) => {
        const profile = res.data.response.players[0]
        // console.log(profile.avatarfull)
        const unixTimeCreated = profile.timecreated
        const createdAt = new Date(unixTimeCreated * 1000)

        const embed = new Discord.MessageEmbed()
          .setTitle(profile.personaname)
          .setURL(profile.profileurl)
          .setDescription(`Profile created at ${createdAt}`)
          .setImage(profile.avatarfull)
          .setColor('00baff')
        message.channel.send(embed)
      })
      .catch((err) => console.error(err))
  },
}
