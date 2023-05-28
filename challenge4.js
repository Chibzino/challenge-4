//using if/else statement
const bill = 275;
const fisrtTip = (15/100) * bill;
const secondTip = (20/100) * bill;
const firstTotal = bill + fisrtTip;
const secondTotal =bill + secondTip;

if (bill >= 50 && bill <= 300){
console.log(`The bill was ${bill}, the tip was ${fisrtTip} and the total is ${firstTotal}`) ;
}


//using Conditional Operator
const Bill =275;
const tip = Bill >= 50 && Bill <=300 ? Bill *(15/100) : Bill * (20/100);
console.log(`The bill is ${Bill}, the tip is ${tip} and the total ia ${Bill + tip}`);
