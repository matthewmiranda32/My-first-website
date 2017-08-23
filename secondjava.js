"use strict"

 var daFstWorker;
 var Aspay;
 var Ashours;
 daFstWorker="Worker A";
 Aspay = prompt("Type a wage for worker A:"); //$37.50
 Ashours = prompt("How many hours has A worked?"); //39

 var daSndWorker;
 var Bspay;
 var Bshours;
 daSndWorker="Worker B";
 Bspay = prompt("Type a wage for worker B:");  //$28.49
 Bshours = prompt("How many hours has B worked?"); //45

 var totalPayA = payProduct(Ashours, Aspay);
 var totalPayB = payProduct(Bshours, Bspay);

 function payProduct(hours, pay){
 	var totalPay;

 if(hours>40){
 	totalPay=(40*pay)+(1.5*pay*(hours-40))
 }

 else {
 	totalPay=hours*pay;
 }
 return totalPay;
}

document.write("Worker A's wages: $" + totalPayA);
document.write("\n");
document.write("Worker B's wages: $" + totalPayB);