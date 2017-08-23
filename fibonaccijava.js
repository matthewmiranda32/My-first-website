"use strict"

var x=0;
var y=1;

fibbonacciStream(x, y);

function fibbonacciStream(x, y){
	var solution;
	console.log(x+y);
	
	for(var n=1; n<=100; n++){
		solution=x+y;
		console.log(solution);
		x=y;
		y=solution;
	}

}