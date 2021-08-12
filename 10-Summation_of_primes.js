/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function isPrime(n) {
    let isPrime = true;
    if (n >= 2) {
        if(n == 2 || n == 3){
           isPrime = true;
        }
        else if (n % 2 == 0) {
            isPrime = false;
        }
        else {
            for (i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    }
    else {
        isPrime = false;
    }
    return isPrime;
}

let sum = 2;
let range = 2000000;

for (let i = 1; i < range; i+=2) {
    sum += isPrime(i) ? i : 0;
}

console.log(sum); // expect 142913828922
