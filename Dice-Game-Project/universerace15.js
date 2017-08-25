"use strict"

function rollTheDice(){

	var roll = Math.floor((Math.random()*6)+1);

	if (roll>=4){
		window.location.assign("successfullypassedmeteorshower.html")
	}
	else {
		window.location.assign("meteordamage.html")
	}
}