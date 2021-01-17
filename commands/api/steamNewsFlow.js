const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
  commands: 'steam-news-flow',
  description:
    'Returns the latest news for the desired game from Steam! Only available in the channel "steam"',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<ID> || Provide the ID for the game which can be found on https://steamdb.info/',

  callback: (message, arguments, text, client) => {
    const channelId = '796767772256239636'
    const gameId = arguments[0]

    const requestNewsLoop = setInterval(() => {
      let latestNews = ''

      axios
        .get(
          `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${gameId}&count=3&maxlength=300&format=json`
        )
        .then((res) => {
          latestNews = res.data.appnews.newsitems[0]
        })
        .then(message.channel.bulkDelete(3, true))
        .then((messages) => {
          const unixTimeCreated = latestNews.date
          const createdAt = new Date(unixTimeCreated * 1000)
          const embed = new Discord.MessageEmbed()
            .setTitle(latestNews.title)
            .setURL(latestNews.url)
            .addFields({ name: latestNews.feedlabel, value: latestNews.contents })
            .addFields({ name: 'Date', value: createdAt, inline: true })
            .addFields({ name: 'Post ID', value: latestNews.gid, inline: true })
            .setFooter(`Game ID: ${latestNews.appid}`)
          message.channel.send(embed)
        })
        .catch((err) => console.error(err))
    }, 1000 * 86400)
  },
}
