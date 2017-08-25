"use strict"

function rollForHome(){
	var roll = Math.floor((Math.random()*20)+1);

	if(roll<=17){
		window.location.assign("universeracehome.html");
	}
	else {
		document.write("Try Again");
	}
}

