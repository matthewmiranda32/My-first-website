"use strict"

function eightRoll(){
	var roll = Math.floor((Math.random()*8)+1);

	if (roll>=6){
		window.location.assign("universeracesuccessfulringpassage.html")
	}
	else{
		window.location.assign("universeraceringdamage.html");
	}
}