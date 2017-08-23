"use strict"

var compress = "";
compress = prompt("Type your string");

var ltr = repeatCharacterCheck(compress);

function repeatCharacterCheck(compress){

	var count = 1;
	var characters = "";

for(var i=0; i<=compress.length; i++){
	if (compress.charAt(i)==compress.charAt(i+1)){
		count++;
	}
	else {
		var numLet;
		numLet = compress[i] + count;
		characters += numLet;
		count = 1;
	}

} 	return characters;
}	document.write(ltr);
