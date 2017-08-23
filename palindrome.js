"use strict"

var text="";
text = prompt("Type a word:");

reverse(text);

function reverse(word) {
	var y = word.length;
for (var i=0; i < y/2; i++) {	
	if (word.charAt(i)!==word.charAt(y - 1 - i)) {
		document.write("This word is not a palindrome");
		return false;
	}
	else{
		document.write("This word is a palindrome");
		return true;
	}
}
}