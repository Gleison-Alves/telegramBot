const TelegramBot = require('node-telegram-bot-api');

const token = '1856550109:AAEHMOGptiW1WeYAyZA4gTsTcq3qCnutiwU';

const bot = new TelegramBot(token, {polling: true});

bot.on('message',(msg) =>{
    const text = msg.text;

    var hi = "oi";
    if(text.toString().toLowerCase().indexOf(hi) === 0){
        bot.sendMessage(msg.chat.id,"Ola "+ msg.from.first_name);
    }
    var tchau = "tchau";
    if(text.toString().toLowerCase().includes(tchau)) {
        bot.sendMessage(msg.chat.id, "Espero te ver por aí de novo, tchau");
    }

    var robot = "você é um robô";
    if (msg.text.indexOf(robot) === 0) {
        bot.sendMessage(msg.chat.id, "Sim, sou um robô, mas não dessa forma!");
    }

    var location = "localização";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id, -23.56284, -46.65464);
        bot.sendMessage(msg.chat.id, "Aqui está á localidade de São Paulo");

    }
    //para grupo se alguem fala idiota o bot remove este
    // var what = "idiota";
    // if (msg.text.includes(what)) {
    //     bot.kickChatMember(msg.chat.id,  msg.from.id);
    //     }
   
});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "seja bem-vindo(a)");
 });


bot.onText(/\/sobre/, (msg) => {

    bot.sendPhoto(msg.chat.id,"https://wallpapercave.com/wp/wp1987466.jpg",{caption : "Aqui vamos nós ! \nEspero que goste da minha companhia Sr."+ msg.from.first_name} );
    
    });

bot.onText(/\/começar/, (msg) => {

     bot.sendMessage(msg.chat.id, "bem vindo(a)", {
    "reply_markup": {
        "keyboard": [["/start", "/sobre"],   ["/sair"], ["você é um robô"]]
        }
    });

    
        
    });

