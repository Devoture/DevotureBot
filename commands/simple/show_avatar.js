const commando = require('discord.js-commando');

class showavatarCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			group: 'simple',
			memberName: 'avatar',
			description: 'shows your avatar in chat'

		});
	}

	async run(message, args) {
        message.reply(message.author.avatarURL + 'thats nice');
    
    }
}
module.exports = showavatarCommand;