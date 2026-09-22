let num1:number=document.getElementById('num1').innerHTML=3405;
let rev_clone:number=num1;
let rev_number:number=0;

while(rev_clone!=0){
    let rem:number=rev_clone % 10;
    rev_number=(rev_number * 10)+rem;
    rev_clone = Math.floor(rev_clone / 10);
}

document.getElementById('rev_num')!.innerHTML=`Reverse Number of ${num1} is ${rev_number}.`;


// Develop a program to check whether a number is a palindrome.

let num2:number=document.getElementById('num2').innerHTML=2002;
let rev_clone_2:number=num2;
let rev_number_2:number=0;

while(rev_clone_2!=0){
    let rem:number=rev_clone_2 % 10;
    rev_number_2=(rev_number_2 * 10)+rem;
    rev_clone_2 = Math.floor(rev_clone_2 / 10);
}

if(rev_number_2 == num2){
    document.getElementById('palindrome')!.innerHTML=`${num2} is Palindrome Number`;
}else{
    document.getElementById('palindrome')!.innerHTML=`${num2} is not Palindrome Number`;
}


// 3. Write a program to print the Fibonacci series up to n terms using a loop

let num3:number=document.getElementById('num3').innerHTML=6;
let a:number=0;
let b:number=1;
let fibonacci_str:string='';
let i:number=0;

while(i<num3){
    fibonacci_str += a + ' ';
    let fibonacci_sum:number=a+b;
    a=b;
    b=fibonacci_sum;
    i++;
}

document.getElementById('fibonacci')!.innerHTML=fibonacci_str;


// 4. Create a program to find the factorial of a number using a loop.

let num4:number=document.getElementById('num4').innerHTML=5;
let fact:number=1;

for(let i=1;i<=num4;i++){
    fact *= i;
}

document.getElementById('factorial')!.innerHTML=`The Factorial of ${num4} is ${fact} `;


// 5. Develop a program to check whether a number is a prime number.

let num5:number=document.getElementById('num5').innerHTML=17866;
let count:number=0;

for(let i=2;i<num5;i++){
    if(num5 % i === 0){
        count++;
    }
}

if(count == 0){
    document.getElementById('prime_num')!.innerHTML=`${num5} is Prime Number`;
}else{
    document.getElementById('prime_num')!.innerHTML=`${num5} is not a Prime Number`;
}


// 6. Write a program to count the total number of digits in a given number.

let num6:number=document.getElementById('num6').innerHTML=1324;
let num6_clone:number=num6;
let  counter:number=0;

while(num6_clone != 0){
    num6_clone = Math.floor(num6_clone / 10);
    counter++;
}

document.getElementById('digit_counter')!.innerHTML=`Total Digits in ${num6} is ${counter}`;


// 7. Create a program to calculate the sum of digits of a number.

let num7:number=document.getElementById('num7').innerHTML=1954;
let num7_clone:number=num7;
let sum:number=0;

while(num7_clone != 0){
    let rem:number = num7_clone % 10;
    sum+=rem;
    num7_clone = Math.floor(num7_clone / 10);
}

document.getElementById('digit_sum')!.innerHTML=`Sum of ${num7} is ${sum}`;


// 8. Develop a program to check whether a number is an Armstrong number.

let num8:number=document.getElementById('num8').innerHTML=153;
let num8_clone:number=num8;
let armstrong_sum:number=0;
let armstrong_count:number=0;

while(num8_clone != 0){
    num8_clone = Math.floor(num8_clone / 10);
    armstrong_count++;
}

num8_clone=num8;

while(num8_clone != 0){
    let rem:number = num8_clone % 10;
    armstrong_sum += Math.pow(rem , armstrong_count);
    num8_clone = Math.floor(num8_clone / 10);
}

if(armstrong_sum === num8){
    document.getElementById('armstrong')!.innerHTML=`${num8} is an Armstrong Number`;
}else{
    document.getElementById('armstrong')!.innerHTML=`${num8} is not an Armstrong Number`;
}






