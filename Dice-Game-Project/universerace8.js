"use strict"

function rollTheDice(){

var roll = Math.floor((Math.random()*4) + 1);

	if(roll >=3){
		window.location.assign("universeracelandonMars.html");
	}
	else{
		window.location.assign("universeracefailedMars.html");
	}
}