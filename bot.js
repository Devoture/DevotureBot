const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'Mzc4NzA1MDgwMDcwNzAxMDU3.DutIUA.0jGEsRUrQhx0OCtcQY9QvqlPH3U'

bot.login(TOKEN);

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Hello') {
        message.channel.sendMessage('Hello! :D ' + message.author);
    } 
});

bot.login(TOKEN);