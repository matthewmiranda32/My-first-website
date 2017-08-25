"use strict"

function eightRoll(){
	var roll = Math.floor((Math.random()*8)+1);

	if (roll>=7){
		window.location.assign("universeraceshieldsup.html")
	}
	else{
		window.location.assign("universeraceradiationdamage.html");
	}
}