/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let max = 2432902008176640000;
let arr = [ ...Array(20).keys() ].map( i => i+1);
let result = max;

for (let i = 20; i <= max; i++) {
    if (arr.every(j => i % j === 0)) {
        result = i;
        break;
    }
}

console.log(result); // expect 232792560