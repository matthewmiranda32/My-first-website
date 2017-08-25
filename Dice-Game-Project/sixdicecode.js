"use strict"

function diceRoll(){

var roll = Math.floor((Math.random()*6) + 1);

	if(roll<=2){
		window.location.assign("universerace10.html");
	}
	else if(roll<=4){
		window.location.assign("universerace12.html");
	}
	else if(roll<=6){
		window.location.assign("universerace14.html");
	}
}
