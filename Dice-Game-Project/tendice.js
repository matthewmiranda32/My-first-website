"use strict"

function tenRoll(){
	var roll = Math.floor((Math.random()*10)+1);

	if (roll<=2){
		document.write("Try Again");
	}
	else if (roll<=4){
		window.location.assign("universerace20.html");
	}
	else if (roll<=6){
		window.location.assign("universerace21.html");
	}
	else if (roll<=8){
		window.location.assign("universerace22.html");
	}
	else {
		window.location.assign("universerace23.html")
	}
}