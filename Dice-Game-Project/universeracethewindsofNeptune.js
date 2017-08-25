"use strict"

function diceRoll(){

var roll = Math.floor((Math.random()*10) + 1);

	if(roll>=9){
		window.location.assign("universeracesweetescape.html");
	}
	else {
		document.write("Try Again");
	}
}