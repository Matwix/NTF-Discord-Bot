const Event = require('../structures/event.js')

module.exports = class Message extends Event {
  constructor (client) {
    super(client, {
      name: 'message'
    })
  }

  run (message) {
    if(message.channel.type == "dm") {
        message.author.send("I'm sorry I don't have any cool things I can do yet.");
    }
    if(message.channel.id == "613497065921576970")
    {
        message.react("👎")
        message.react("👍")
    }
    if (!message.author.bot) {
      if (message.content.startsWith(process.env.PREFIX)) {
        const cmd = message.content.split(' ')[0].substring(process.env.PREFIX.length)
        const args = message.content.substring(cmd.length + process.env.PREFIX.length + 1)
        const command = this.client.commands.find(c => c.name.toLowerCase() === cmd || (c.aliases && c.aliases.includes(cmd)))

        if (this.onlyDev === true && message.author.id === process.env.OWNER) return
        if ((command && cmd.trim()) && command.canRun(message, args)) {
          try {
            command._run(message, args)
          } catch (e) {
            this.client.log('error', e)
          } finally {
            this.client.log('info', `${message.author.tag} issue command: ${message.content}`)
          }
        }
      }
    }
  }
}
