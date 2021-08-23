const TelegramBot = require('node-telegram-bot-api');

const token = '1856550109:AAEHMOGptiW1WeYAyZA4gTsTcq3qCnutiwU';

const bot = new TelegramBot(token, {polling: true});

const DescriptArray = `Usar um Array literalmente é a maneira mais fácil de criar um Array de JavaScript. Código:
    
var array_name = [item1, item2, ...]
Exemplo:

var carros = [ "Saab", "Volvo", "BMW" ]
Espaços e quebras de linha não são importantes. Uma declaração pode abranger várias linhas:

var carros = [
    "Saab",
    "Volvo",
    "BMW"
];`;



bot.on('message',(msg)=>{
    const texto = msg.text;
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    let nameUser = msg.from.first_name;


    
    //é executado depois de ouvir um mensagem e espera 1 segundo e responde

    var robot = "você é um robô?";
    if (texto.indexOf(robot) === 0) {
        bot.sendMessage(chatId, "Sim, sou um robô, mas não desses que tem na tv sabe sksk!\nSou um software desenvolvido por um humano");
    }



    var location = "localização";
    if (texto.indexOf(location) === 0) {
        bot.sendLocation(chatId, -23.56284, -46.65464);
        bot.sendMessage(chatId, "Aqui está á localidade de São Paulo");

    }

    const DiaHoje = "que dia é hoje"
    if(texto.toLowerCase().indexOf(DiaHoje) === 0){
        
        let hoje = new Date();
        let dia = hoje.getDay();
        let diaDeHoje = hoje.getDate();
        let mes = hoje.getMonth();
        let ano = hoje.getFullYear();

        let diaSemana=["Domingo"
        ,"Segunda-feira","Terça-faira","Quarta-feira",
        "Quinta-feira","Sexta-feira","Sabado"];

        let meses= ["Janeiro","Fevereiro","Março",
        "Abril","Maio","Junho","Julho","Agosto",
        "Setembro","Outubro","Novembro","Dezembro"]

        bot.sendMessage(chatId,"Hoje é dia "+ diaDeHoje +" uma "+ diaSemana[dia] + " do mês "+ meses[mes]+" do ano "+ ano)
    }
    

    var natal = "quantos dias faltam para o natal";
    if(texto.toLowerCase().indexOf(natal) === 0){
        dia = new Date();
        var cmas = new Date(dia.getFullYear(), 11, 25);

        if(dia.getMonth() == 11 && dia.getDate() > 25){
            cmas.setFullYear(cmas.getFullYear()+1);
        }

        var one_day = 1000*60*60*24;
        var h = Math.ceil((cmas.getTime()-dia.getTime())/(one_day));
        bot.sendMessage(chatId,h +" dias restantes até o natal")
    }

    
    const saldacao=()=>{
        const data = new Date();
        let hora = data.getHours();

        if(hora >= 6 && hora <= 12){
            bot.sendMessage(msg.chat.id,"Bom dia")
        }else if(hora >= 12 && hora <= 17){
            bot.sendMessage(msg.chat.id,"Bom tarde")
        }else if(hora >= 17 && hora <= 23){
            bot.sendMessage(msg.chat.id,"Boa noite")
        }else{
            bot.sendMessage(msg.chat.id,"Boa madrugada")
        }

     };


    const lista2 = {
        'oi': ()=> bot.sendMessage(chatId,"Ola "+ nameUser + saldacao()),
        'idiota': ()=> bot.sendMessage(chatId, "eu não sou idiota ;-;"),
        'tchau': ()=> bot.sendMessage(chatId, "até depois então"),
        'declarações': ()=> bot.sendMessage(chatId, `Exemplos de declarações no link:\n\nhttps://codepen.io/GleisonCCC/pen/KKmmzym?editors=1111`) ,
        'green': ()=> bot.sendMessage(chatId, "há você gosta da cor verde?"),
        'purple': ()=> bot.sendMessage(chatId, "há você gosta da cor roxa?"),
        'orange': ()=> bot.sendMessage(chatId, "há você gosta da cor laranja?"),
        'pink': ()=>  bot.sendMessage(chatId, "há você gosta da cor rosa?"),
        'gold': ()=>  bot.sendMessage(chatId, "há você gosta da cor de ouro?"),
        'blue': ()=>  bot.sendMessage(chatId, "há você gosta da cor azul?"),
        'array': ()=> bot.sendMessage(chatId, `Exemplo de um Array:\nconst celulares = ['iPhone','Sansung','Motorona','Asus'];\n\n ${DescriptArray} \n\n https://codepen.io/GleisonCCC/pen/OJmmMdY`),
        'site': ()=> bot.sendMessage(chatId, `meu site via botTegram `)
        
    }
    acharPropriedade(lista2);

    //pretendo colocar mas musicas ou quem sabe achar um links para varias musicas
    const musicas = {
        'weeknd': () => bot.sendAudio(chatId,"./sons/i-feel-it-coming-ft-daft-punk-official-video.mp3"),
        'circles': () => bot.sendAudio(chatId,"./sons/Circles.mp3")
    }
    acharPropriedade(musicas);

    

    function acharPropriedade(arr){
    let chave = Object.keys(arr);
    for(let i = 0; i < chave.length; i++){
        let chaveAtual = '';
        if(texto.toString().toLowerCase().includes(chave[i])){
            chaveAtual = chave[i];
            arr[chaveAtual]();
        }
     }
    }



    if(texto.indexOf("video") === 0){
        bot.sendVideo(chatId, "http://techslides.com/demos/sample-videos/small.mp4",{caption : "Video de demostração e teste"})
    }
   
});


bot.onText(/\/foto/, (msg)=> {
    let chatId = msg.chat.id;
    let userId = msg.from.id;
    bot.getUserProfilePhotos(userId, 0, 1).then((data)=>{
      bot.sendPhoto(chatId,data.photos[0][0].file_id,{caption: "Aqui está um foto sua "+ msg.from.first_name});
    });

});

bot . onText (/\/musica/,(msg)=>{

    bot.sendMessage(msg.chat.id, "Lista de musicas",{ 
    "reply_markup" : { 
        "keyboard" : [ 
            [ "circles","weeknd" ] 
        ] 
        } 
    } ) ;
    
    } ) ;

    
bot . onText (/\/aleatorio/,(msg)=>{

    bot.sendMessage(msg.chat.id, "Lista de palavras aleatorias ",{ 
    "reply_markup" : { 
        "keyboard" : [ 
            ['oi','idiota','tchau'],['declarações'],['green','purple','orange','pink','gold','blue'],['array'],['você é um robô?' ,'localização','quantos dias faltam para o natal'],['que dia é hoje']
        ] 
        } 
    } ) ;
    
    } ) ;

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "seja bem-vindo(a) "+ msg.from.first_name);
 });

bot.onText(/\/sobre/, (msg) => {

    bot.sendPhoto(msg.chat.id,"https://wallpapercave.com/wp/wp1987466.jpg",{caption : "Aqui vamos nós ! \nEspero que goste da minha companhia Sr."+ msg.from.first_name} );
    
    });



