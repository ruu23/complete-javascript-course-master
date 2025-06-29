'use strict';

/* LECTURE: Introduction to Objects  */
const myCountry = {
    country: 'France',
    capital: 'paris',
    language: 'French',
    population: 63,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
       this.isIsland = this.neighbours.length == 0 ? true : false;
    }
}

/* LECTURE: Dot vs. Bracket Notation */
console.log(`${myCountry.country} has ${myCountry.population} million 
${myCountry.language}-speaking people,
${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.`);

// dot notation
myCountry.population += 2
console.log(myCountry.population);
//brackets notation.
myCountry['population'] -= 2
console.log(myCountry['population']);

/* LECTURE: Object Methods */
myCountry.describe();

myCountry.checkIsland();
console.log(myCountry.isIsland);

/* LECTURE: Iteration: The for Loop  */

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

/* LECTURE: Looping Arrays, Breaking and Continuing */

const populations = [10, 1441, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population) { 
    return (population / 7900) * 100; 
  } 
 
for (let i = 0; i < populations.length; i++) {
    const percentage = percentageOfWorld1(populations[i]).toFixed(0);
    percentages2.push(percentage)
}
console.log(percentages2);

/* LECTURE: Looping Backwards and Loops in Loops */

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
}
}
