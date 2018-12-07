const commando = require('discord.js-commando');

class dicerollCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'roll',
			group: 'simple',
			memberName: 'roll',
			description: 'Rolls a dice'

		});
	}

	async run(message, args) {
        var diceRoll = Math.floor(Math.random() * 6 + 1);
        
        message.reply('Your Dice landed on ' + diceRoll);


    }
    
}
module.exports = dicerollCommand;

