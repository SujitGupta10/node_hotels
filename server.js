// FUNCTION SYNTAX

// function add(a,b){
//     return a+b;
// }
// var add=function(a,b){
//     return a+b;
// }
// var add=(a,b) => {return a+b};

// var add=(a,b) => a+b;
// var result=add(2,900);
// console.log(result);

// function callback(){
//     console.log("now adding is succesfully complete");

// }

// const add =function(a,b,callback){
//     var result =a+b;
//     console.log("result:",result);
//     callback();
 // } 
// add(9,80,callback);

// const add =function(a,b,sujit){
//     var result =a+b;
//     console.log("result:",result);
//     sujit();
// }
// add(2,4,()=>console.log("add completed"));    

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile("greeting.txt", "hi " +user.username +"\n", ()=>{console.log("file is created");
// });

// console.log(fs);

const notes = require("./notes.js");
var _ = require('lodash');

console.log("Server file is available");
var age =notes.age;
console.log(age);

var result= notes.addNumber(age,10);
console.log("result",result);

var data =["person","person",1,2 ,1,2,"name","age"];
var filter =_.uniq(data);
console.log(filter);