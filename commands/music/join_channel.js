const commando = require('discord.js-commando');

class joinchannelCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'join',
			group: 'music',
			memberName: 'join',
			description: 'joins the voice channel of the commander'

		});
	}

	async run(message, args) {

        if(message.member.voiceChannel) {
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("I have joined the party");
                    })
            }
        } else {
            message.reply("Are you trolling me? You must join a voice channel");
        } 
	}
}
module.exports = joinchannelCommand;
