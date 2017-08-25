"use strict"

function twelveRoll(){
	var roll = Math.floor((Math.random()*12)+1);

	if (roll<=3){
		document.write("Try Again");
	}
	else if (roll<=6){
		window.location.assign("universerace26.html");
	}
	else if (roll<=9){
		window.location.assign("universerace27.html");
	}
	else if (roll<=12){
		window.location.assign("universerace28.html");
	}
}