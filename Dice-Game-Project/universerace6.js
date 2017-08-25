"use strict"

function rollTheDice(){

var roll = Math.floor((Math.random()*4) + 1);

	if(roll ==4){
		window.location.assign("universeraceanothersuccess.html");
	}
	else{
		window.location.assign("universeracefailedVenus.html");
	}
}