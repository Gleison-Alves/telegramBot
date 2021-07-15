const TelegramBot = require('node-telegram-bot-api');

const token = '1856550109:AAEHMOGptiW1WeYAyZA4gTsTcq3qCnutiwU';

const bot = new TelegramBot(token, {polling: true});

bot.on('message',(msg) =>{
    const text = msg.text;

    var hi = "oi";
    if(text.toString().toLowerCase().includes(hi)){
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

    var natal = "natal";
    if(msg.text.toString().toLowerCase().includes(natal)){
        dia = new Date();
        var cmas = new Date(dia.getFullYear(), 11, 25);

        if(dia.getMonth() == 11 && dia.getDate() > 25){
            cmas.setFullYear(cmas.getFullYear()+1);
        }

        var one_day = 1000*60*60*24;
        var h = Math.ceil((cmas.getTime()-dia.getTime())/(one_day));
        bot.sendMessage(msg.chat.id,h +" dias restantes até o natal")
    }


    const lista2 = {
        'red': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor vermelha?"),
        'green': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor verde?"),
        'purple': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor roxa?"),
        'orange': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor laranja?"),
        'pink': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor rosa?"),
        'gold': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor de ouro?"),
        'blue': ()=>  bot.sendMessage(msg.chat.id, "há você gosta da cor azul?"),
        'idiota': ()=> bot.sendMessage(msg.chat.id, "eu não sou idiota ;-;")
    }

    let chave = Object.keys(lista2);
    for(let i = 0; i < chave.length; i++){
        //console.log(chave[i])
        let novvo = '';
        if(text.toString().toLowerCase().includes(chave[i])){
            novvo = chave[i];
            lista2[novvo]();
            //console.log(chave[i]);
        }
    }
   
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

