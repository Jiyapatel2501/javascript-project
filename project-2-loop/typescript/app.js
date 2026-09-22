"use strict";
let num1 = document.getElementById('num1').innerHTML = 3405;
let rev_clone = num1;
let rev_number = 0;
while (rev_clone != 0) {
    let rem = rev_clone % 10;
    rev_number = (rev_number * 10) + rem;
    rev_clone = Math.floor(rev_clone / 10);
}
document.getElementById('rev_num').innerHTML = `Reverse Number of ${num1} is ${rev_number}.`;
// Develop a program to check whether a number is a palindrome.
let num2 = document.getElementById('num2').innerHTML = 2002;
let rev_clone_2 = num2;
let rev_number_2 = 0;
while (rev_clone_2 != 0) {
    let rem = rev_clone_2 % 10;
    rev_number_2 = (rev_number_2 * 10) + rem;
    rev_clone_2 = Math.floor(rev_clone_2 / 10);
}
if (rev_number_2 == num2) {
    document.getElementById('palindrome').innerHTML = `${num2} is Palindrome Number`;
}
else {
    document.getElementById('palindrome').innerHTML = `${num2} is not Palindrome Number`;
}
// 4. Create a program to find the factorial of a number using a loop.
let num4 = document.getElementById('num4').innerHTML = 5;
let fact = 1;
for (let i = 1; i <= num4; i++) {
    fact *= i;
}
document.getElementById('factorial').innerHTML = `The Factorial of ${num4} is ${fact} `;
// 5. Develop a program to check whether a number is a prime number.
let num5 = document.getElementById('num5').innerHTML = 17866;
let count = 0;
for (let i = 2; i < num5; i++) {
    if (num5 % i === 0) {
        count++;
    }
}
if (count == 0) {
    document.getElementById('prime_num').innerHTML = `${num5} is Prime Number`;
}
else {
    document.getElementById('prime_num').innerHTML = `${num5} is not a Prime Number`;
}
// 6. Write a program to count the total number of digits in a given number.
let num6 = document.getElementById('num6').innerHTML = 1324;
let num6_clone = num6;
let counter = 0;
while (num6_clone != 0) {
    num6_clone = Math.floor(num6_clone / 10);
    counter++;
}
document.getElementById('digit_counter').innerHTML = `Total Digits in ${num6} is ${counter}`;
// 7. Create a program to calculate the sum of digits of a number.
let num7 = document.getElementById('num7').innerHTML = 1954;
let num7_clone = num7;
let sum = 0;
while (num7_clone != 0) {
    let rem = num7_clone % 10;
    sum += rem;
    num7_clone = Math.floor(num7_clone / 10);
}
document.getElementById('digit_sum').innerHTML = `Sum of ${num7} is ${sum}`;
// 8. Develop a program to check whether a number is an Armstrong number.
let num8 = document.getElementById('num8').innerHTML = 153;
let num8_clone = num8;
let armstrong_sum = 0;
let armstrong_count = 0;
while (num8_clone != 0) {
    num8_clone = Math.floor(num8_clone / 10);
    armstrong_count++;
}
num8_clone = num8;
while (num8_clone != 0) {
    let rem = num8_clone % 10;
    armstrong_sum += Math.pow(rem, armstrong_count);
    num8_clone = Math.floor(num8_clone / 10);
}
if (armstrong_sum === num8) {
    document.getElementById('armstrong').innerHTML = `${num8} is an Armstrong Number`;
}
else {
    document.getElementById('armstrong').innerHTML = `${num8} is not an Armstrong Number`;
}
