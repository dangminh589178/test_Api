
var greetings = require('./greeting.json');
var sayhello = function(){
    console.log(greetings.say);
}

module.exports = sayhello;