/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

const isPalindrome = n => n === [...n].reverse().join``

let result = 0;
let max = -1/0

for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
        let product = i * j;
        if (product > max && isPalindrome(product.toString())) {
            max = product;
            break;
        }
    }
}

console.log(max); // expect 906609 (993 * 913)
