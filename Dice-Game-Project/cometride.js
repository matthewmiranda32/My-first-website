"use strict"

console.log("Millenial");

function rollTheDice(){

var roll = Math.floor((Math.random()*10)+1);

	if(roll<=3){
		window.location.assign("failedtohitcharide.html");
	}
	else if(roll<=6){
		window.location.assign("15secondcometride.html");
	}
	else{
		window.location.assign("30secondcometride.html");
	}
} 