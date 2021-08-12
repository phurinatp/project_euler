/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

let n = 600851475143
let arr = [];

while(1) {
    let k = -1;
    for (let i = 0; i < n/2|0; i++) {
        if (n % i === 0 && isPrime(i)) {
            k = 1
            n /= i;
            arr.push(i);
            break;
        }
    }
    if (k === -1) {
        arr.push(n);
        break;
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

console.log(Math.max(...arr)) // expect 6857
