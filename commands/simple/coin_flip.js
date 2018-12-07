const commando = require('discord.js-commando');

class coinflipCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'flip',
			group: 'simple',
			memberName: 'flip',
			description: 'flip a coin'

		});
	}

	async run(message, args) {
		var chance = Math.floor(Math.random() * 2);

		if(chance == 0) {
			message.reply(' Your coin has landed on Heads');
		} else {
			message.reply(' Your coin has landed on Tails');
		}

	}
}
module.exports = coinflipCommand;

