"use strict"

function diceRoll(){

var roll = Math.floor((Math.random()*6) + 1);

	if(roll==6){
		window.location.assign("universerace13.html");
	}
	else {
		window.location.assign("universeracesolarburn.html");
	}
}