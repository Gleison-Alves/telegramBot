const TelegramBot = require('node-telegram-bot-api');

const token = '1856550109:AAEHMOGptiW1WeYAyZA4gTsTcq3qCnutiwU';

const bot = new TelegramBot(token, {polling: true});

bot.on('text',(msg) =>{
    const text = msg.text;
    if(text.toLowerCase() == 'oi'){
        bot.sendMessage(msg.chat.id, 'oi');
    }else if(text.toLowerCase() == 'tchau'){
        bot.sendMessage(msg.chat.id, 'tchau tenha um bom dia:)');
    }else{
        bot.sendMessage(msg.chat.id, 'não entendi sua pergunta ');
    }
});