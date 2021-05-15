var greeting = require('./greeting.json');

var sayhello = function(){
    console.log(greeting.en);
}

module.exports = sayhello;