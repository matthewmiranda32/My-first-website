"use strict"

var str="";
str = prompt("Type a phrase:");

var x = upperCase(str);

function upperCase(str){ 
	var text=str.toLowerCase().split(' ');

	for(var i = 0; i < text.length; i++){
		var words=text[i].split('');
		words[0]=words[0].toUpperCase();
		text[i]=words.join('');
		
	}
	return text.join(' ');
}
document.write(x);