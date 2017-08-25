"use strict"

function diceRoll(){

var roll = Math.floor((Math.random()*12)+1);

	if(roll==12){
		window.location.assign("youescapedtheblackhole.html");
	}
	else {
		window.location.assign("universerace.html");
	}
}