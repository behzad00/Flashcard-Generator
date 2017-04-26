var inquirer = require('inquirer');

function BasicCard (front , back) {
	this.front = front;
	this.back = back ;

this.newClozeCard = function (text , cloze) {




}

}

BasicCard.prototype.printInfo =  function() {
	console.log ("Front: " +this.front + "\nBack: " +this.back);
	console.log("-----------------------------");
};



var count = 0 ;
var BasicCardArray = [];

// var franceCapital = new BasicCard("Where is the capital of France? " , "Paris")
// 	BasicCardArray.push(franceCapital);

// var largestState = new BasicCard ("Which states is the largest by area? " , "Alaska");
//     BasicCardArray.push(largestState);

// var firstProgrammingLanguage = new BasicCard ("What is the first programming language? " , "Fortran");
// 	BasicCardArray.push(firstProgrammingLanguage);

// var fibonacciSequence = new BasicCard ("What sequence is a set of numbers that each number is equal to the sum of the preceding two numbers? ", "Fibonacci")
// 	BasicCardArray.push(fibonacciSequence);

// var theUKCurrency = new BasicCard ("What is the currency of the UK? " , "Pound sterling");
// 	BasicCardArray.push(theUKCurrency);

var basicCardJSON = [ 

{ franceCapital :	{
	"front" : "Where is the capital of France? " ,
	"back" : "Paris"
}},

{	largestState : {
	"front" : "Which states is the largest by area?" ,
	"back" : "Alaska"

}},

{	firstProgrammingLanguage :{
	"front" : "What is the first programming language?" ,
	"back" : "Fortran"
}} ,

{ fibonacciSequence :	{

	"front" : "What sequence is a set of numbers that each number is equal to the sum of the preceding two numbers?" ,
	"back"  : "Fibonacci"

}} ,

{	theUKCurrency : {
	"front" : "What is the currency of the UK?" ,
	"back" : "Pound sterling"
}} ,


];


// for ( var i = 0 ; i < BasicCardArray.length ; i++) {

// 	console.log(BasicCardArray[i]);
// }

 for ( i = 0 ; i < BasicCardArray.length ; i++) 

inquirer.prompt ([
	{
	name : "front" ,
	message: "BasicCardArray.front"
	} ,

	{
	naame : "back" ,
	message : "BasicCardArray.back"
	}


	]).then(function( f , b) {


})











module.exports = BasicCard ;