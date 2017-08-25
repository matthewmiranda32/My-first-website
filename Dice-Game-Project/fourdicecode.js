"use strict"

function rollTheDice(){

var roll = Math.floor((Math.random()*4) + 1);

	if(roll==2){
		window.location.assign("universerace4.html");
	}
	else if(roll==3){
		window.location.assign("universerace6.html");
	}
	else if(roll==4){
		window.location.assign("universerace8.html");
	}
	else{
		document.write("Try Again!");
	}
}
