const commando = require('discord.js-commando');

class leavechannelCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'leave',
			group: 'music',
			memberName: 'leave',
			description: 'leaves the voice channel'

		});
	}

	async run(message, args) {
        if(message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        }

    }

}
module.exports = leavechannelCommand;