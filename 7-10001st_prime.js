/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

let c = 1;
let nth = 10001;
let number = 1;

while(c <= nth) {
    if (isPrime(++number)) {
        c++;
    }
}

function isPrime(x) {
    let i = 1;
    if (x <= 1) return false;
    while (++i <= x/2) {
        if (x % i === 0) return false;
    }
    return true;
}

console.log(number) // expect 104743