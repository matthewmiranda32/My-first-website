"use strict"

 var daFstWorker;
 daFstWorker="Worker A"
 var hoursA=34;
 var wageA=17.24;

 var daSndWorker;
 daSndWorker="Worker B"
 var hoursB=47;
 var wageB=23.43;

var payA;
var payB;
 payA=hoursA*wageA;
 payB=hoursB*wageB;
 var finalPay1;
 var finalPay2

 if(hoursA>40){
 	finalPay1=(40*wageA)+(1.5*wageA*(hoursA-40))
 }

 else {
 	finalPay1=payA;
 }

 if(hoursB>40){
 	finalPay2=(40*wageB)+(1.5*wageB*(hoursB-40))
 }

 else {
 	finalPay2=payB;
 }

document.write("Worker A's wages: $" + finalPay1);
document.write("\n");
document.write("Worker B's wages: $" + finalPay2);

