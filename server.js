const express = require('express');
const app = express();
var ms = require('./mes.js');
// var greet = require('./greet/index.js');
// var hello = require('./greet/hello.js');

//helo();
// greet.english();
// greet.vietnam();

var myLogged = function(req,res,next){
    console.log('Logged');
    next();
    
   
    
}
var loggnext = function(req,res){
    console.log('Logged next');
    
}

app.use(myLogged);
app.get('/', (req,res) =>{
    res.send("HelloNodejs");
    
})

// app.get('/user', auth, (req,res) =>{
//     console.log('Home Page');
//     res.send('Home Page');
// })

// app.get('/', (req,res) =>{
//     var time  = 'asda '+  req.requestTime
//     res.send(time)
// })

// function auth(req,res,next){
//     console.log('auth')
//     next()
// }

// function auth(req,res,next){
    
//     console.log('before')
//     console.log('after')
//     next()
//     console.log('end')
// }

app.listen(3000, ()=>{
    console.log('Run...')
})