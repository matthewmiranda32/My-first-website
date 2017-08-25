"use strict"

function eightRoll(){
	var roll = Math.floor((Math.random()*8)+1);

	if (roll<=2){
		document.write("Try Again");
	}
	else if (roll<=4){
		window.location.assign("universerace17.html");
	}
	else if (roll<=6){
		window.location.assign("universerace19.html");
	}
	else{
		window.location.assign("universerace20.html");
	}
}