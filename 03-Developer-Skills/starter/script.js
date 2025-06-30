// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = arr => {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      //find
      result += `... ${arr[i]}ºC in ${i + 1} days `;
    }
  }
  //fix
  return result + '  ...';
};
//identify
console.log(printForecast([11, 23, 77]));
console.log(printForecast([12, 5, -5, 0, 4]));
