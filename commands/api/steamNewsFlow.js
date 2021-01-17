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
        .then(message.channel.messages.fetch({ limit: 1 }))
        .then((messages) => {
          console.log(`Message content: ${message.content}`)
          console.log(`gid: ${latestNews.gid}`)
          if (message.author.bot) {
            // This line should be changed to something like, if (message.content.includes(latestNews.gid)), current statement is just for testing
            message.channel.send("You're all up to date!")
          } else {
            const embed = new Discord.MessageEmbed()
              .setTitle(latestNews.title)
              .setURL(latestNews.url)
              .addFields({ name: latestNews.feedlabel, value: latestNews.contents })
              .setFooter(latestNews.gid)
            message.channel.send(embed)
          }
          // console.log(embed.footer.text)
        })
        .catch((err) => console.error(err))
    }, 2000)
  },
}
