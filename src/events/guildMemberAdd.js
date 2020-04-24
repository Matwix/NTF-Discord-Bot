const Event = require('../structures/event.js')

module.exports = class GuildMemberAdd extends Event {
  constructor (client) {
    super(client, {
      name: 'guildMemberAdd'
    })
  }

  log (type, ...args) {
    console.log(`[${type}]`, ...args)
  }

  run (member) {
      member.send("***Hello and welcome to the National Task Force Studios Discord Server.*** \n\ __Okay so the first thing you might notice is “Hey where are all of the channels like general/suggestions/memes.” Well all you have to do is go to the channel “📋-get-roles-📋” and react to what you want to see.__ \n\ \n\ __**Why do we do this?**__ Well its to lower the amount of clutter A user is exposed to and organize only what YOU want to see and remove what you do not need to see. \n\ \n\ Please feel free to mute any channel located in the “📲Important channels📲” Category as you cant remove them yourself. Do NOT mute the announcements so you know when our community meetings are or if they were delayed or even postponed for another time. This does happen from time to time as the owners sometimes get busy. \n\ \n\ For now our community meetings are held at- \n\ 6pm Central time every friday!").catch(this.log('error', 'DM has failed to be sent, May have still been sent.'));
  }
}
