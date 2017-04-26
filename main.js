
var BasicCard = require("./BasicCard") ;


var questionArray = [] ;
  

questionArray.push(new BasicCard("What is the capital of France? " , "Paris"));


for ( var i =0 ; i < questionArray.length ; i++){

console.log(questionArray[i].front) ;
console.log(questionArray[i].back) ;

}









