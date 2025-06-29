'use strict';

/* Coding Challenge #3 */
const mark = {
  fullName: 'Mark Miller',
  mass: 78, 
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2
  }
}
const john = {
  fullName: 'John Smith',
  mass: 92, 
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2
  }
}

const result = john.calcBMI() > mark.calcBMI ? 'higher' : 'lower'

console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(0)}) 
is ${result} than ${mark.fullName}'s BMI (${mark.calcBMI().toFixed(0)})!"`);

/* Coding Challenge #4  */
console.log("-------------Coding Challenge #4----------------");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];

const calcTip = (bill) =>{
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.20;
  }
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);

  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);


// BOUNS
function calcAverage(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  const average = sum / arr.length;
  return average;
}

console.log(calcAverage(totals));
