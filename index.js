const twit  = require('twit');
const secret = require('./secret'); 
const emojis = require('emojis-list');

//colocar suas credenciais da API do Twitter no arquivo secret.js
var T = new twit(secret);

setInterval(Twittar, 1000*60);

function Twittar(){
    T.post('statuses/update', { status: ( new Date() + ": " + emojis[Math.floor((Math.random() * 1000) + 1)]) }, function(err, data, response) {
      console.log(data);
    });

}


