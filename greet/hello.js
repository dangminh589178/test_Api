// exports = function(){
//     console.log("Hello world");
// }
// console.log(exports);
// console.log(module.exports);

// exports = function () {
//     console.log('Hello');
// }

// console.log(exports); 
// console.log(module.exports);

var first = function () {
    console.log("First");
}
var second = function () {
    setTimeout(first,5000);
    console.log("Second");
}
second();