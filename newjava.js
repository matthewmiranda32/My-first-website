"use strict"

for(var numba=0; numba<=100; numba++)
{

	if(numba%3==0 && numba%5==0)
		console.log("fizzbuzz");

	else if(numba%3==0)
		console.log("fizz");

	else if(numba%5==0)
		console.log("buzz");

	else
		console.log(numba);
}