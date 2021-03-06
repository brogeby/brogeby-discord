const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
  commands: 'steam-news',
  description: 'Returns the latest news for the desired game from Steam!',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<ID> || Provide the ID for the game which can be found on https://steamdb.info/',

  callback: (message, arguments, text) => {
    const gameId = arguments[0]
    axios
      .get(
        `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${gameId}&count=3&maxlength=300&format=json`
      )
      .then((res) => {
        const latestNews = res.data.appnews.newsitems[0]
        console.log(latestNews)

        const embed = new Discord.MessageEmbed()
          .setTitle(latestNews.title)
          .setURL(latestNews.url)
          .addFields({ name: latestNews.feedlabel, value: latestNews.contents })
          .setFooter(`GID: ${latestNews.gid}`)
        message.channel.send(embed)
      })
      .catch((err) => console.error(err))
  },
}
