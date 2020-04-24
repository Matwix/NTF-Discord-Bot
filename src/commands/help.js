const Command = require('../structures/command.js')

const { RichEmbed } = require('discord.js')

module.exports = class Invite extends Command {
  constructor (client) {
    super(client, {
      name: 'help',
      aliases: ['commands']
    })
  }

  async run (message, args) {
    message.channel.send(
      new RichEmbed()
        .setColor('3BC2A1')
        .setTitle(`NTFBot Commands`)
        .setDescription(`Below is a list of commands you can use with the Nihongo Bot.`)
        .addField(`n!help | n!commands`, `Returns a list of commands you can use with the bot.`, false)
        .addField(`n!ping | n!pong`, `Returns the current Latency and API Latency.`, false)
        .addField(`Want more?`, `Post a suggestion for what you want to see added!`, false)
        .setTimestamp()
        .setFooter('Powered by nationaltaskforce.net', process.env.FOOTER_ICON)
    ).catch(e => this.client.log('error', e))
  }
}
