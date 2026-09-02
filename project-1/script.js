//Create a program to calculate the sum of two numbers
let num1 = 10;
let num2 = 10;
let sum = num1 + num2;
document.getElementById('num1').innerHTML = `Number 1 => ${num1}`;
document.getElementById('num2').innerHTML = `Number 2 => ${num2}`;
document.getElementById('sum').innerHTML = `Sum of ${num1} and ${num2} is ${sum}`;
//Create a program to calculate the difference between two numbers.
let num3 = 40;
let num4 = 50;
let sub = num3 - num4;
document.getElementById('num3').innerHTML = `Number 1 => ${num3}`;
document.getElementById('num4').innerHTML = `Number 2 => ${num4}`;
document.getElementById('sub').innerHTML = `Subtraction of ${num3} and ${num4} is ${sub}`;
//Create a program to calculate the product of two numbers.
let num5 = 10;
let num6 = 5;
let mul = num5 * num6;
document.getElementById('num5').innerHTML = `Number 1 => ${num5}`;
document.getElementById('num6').innerHTML = `Number 2 => ${num6}`;
document.getElementById('mul').innerHTML = `Multiplication of ${num5} and ${num6} is ${mul}`;
//Write a program to divide two numbers and handle division by zero using conditional statements.
let num7 = 10;
let num8 = 5;
let div;
document.getElementById('num7').innerHTML = `Number 1 => ${num7}`;
document.getElementById('num8').innerHTML = `Number 2 => ${num8}`;
if (num7 == 0 || num8 == 0) {
    document.getElementById('div').innerHTML = `You can't divied by zero`;
}
else {
    div = num7 / num8;
    document.getElementById('div').innerHTML = `Division of ${num7} and ${num8} is ${div}`;
}
// Create a program to calculate the square and cube of a number.
let num9 = 2;
let square = num9 * num9;
let cube = num9 * num9 * num9;
document.getElementById('num9').innerHTML = `Number => ${num9}`;
document.getElementById('square').innerHTML = `Square of ${num9} is ${square}`;
document.getElementById('cube').innerHTML = `Cube of ${num9} is ${cube}`;
// Develop a program to calculate the area of a rectangle.
let l = 10;
let b = 5;
let r_area = l * b;
document.getElementById('length').innerHTML = `Length => ${l}`;
document.getElementById('width').innerHTML = `Width => ${b}`;
document.getElementById('r_area').innerHTML = `Area of Rectangle is ${r_area}`;
// Create a program to calculate the area of a circle.
let r = 15;
let c_area = 3.14 * r * r;
document.getElementById('radius').innerHTML = `Radius => ${r}`;
document.getElementById('c_area').innerHTML = `Area of Circle is ${c_area}`;
// Write a program to convert Celsius to Fahrenheit.
let c = 15;
let fahrenheit = (c * 9 / 5) + 32;
document.getElementById('celcius').innerHTML = `Celcius value => ${c}`;
document.getElementById('fahrenheit').innerHTML = `Celcius to Fahrenheit is ${fahrenheit}`;
// Develop a program to calculate Simple Interest using the formula: SI = (P × R × T) / 100
let p = 10000;
let rate = 5;
let t = 12;
let si = p * rate * t / 100;
document.getElementById('p').innerHTML = `Amount => ${p}`;
document.getElementById('rate').innerHTML = `Rate => ${rate}`;
document.getElementById('t').innerHTML = `Time => ${t}`;
document.getElementById('si').innerHTML = `Simple Intrest is ${si}`;
// Write a program to check whether a number is even or odd
let num10 = 25;
document.getElementById('num10').innerHTML = `Number => ${num10}`;
if (num10 % 2 == 0) {
    document.getElementById('odd_even').innerHTML = `Your Number is Even ${num10}`;
}
else {
    document.getElementById('odd_even').innerHTML = `Your Number is odd ${num10}`;
}
// Create a program to check whether a number is positive, negative, or zero.
let num11 = 15;
if (num11 > 0) {
    document.getElementById('num_type').innerHTML = `Your Number is Positive ${num11}`;
}
else if (num11 < 0) {
    document.getElementById('num_type').innerHTML = `Your Number is Negetive ${num11}`;
}
else {
    document.getElementById('num_type').innerHTML = `Your Number is Nutral ${num11}`;
}
// Develop a program to find the largest of two numbers using if-else
let num12 = 10;
let num13 = 15;
document.getElementById('num12').innerHTML = `Number 1 => ${num12}`;
document.getElementById('num13').innerHTML = `Number 2 => ${num13}`;
if (num12 >= num13) {
    document.getElementById('largest_of_two').innerHTML = `${num12} is Largest`;
}
else {
    document.getElementById('largest_of_two').innerHTML = `${num13} is Largest`;
}
// Create a program to find the largest of three numbers using conditional statements.
let num14 = 10;
let num15 = 15;
let num16 = 25;
document.getElementById('num14').innerHTML = `Number 1 => ${num14}`;
document.getElementById('num15').innerHTML = `Number 2 => ${num15}`;
document.getElementById('num16').innerHTML = `Number 2 => ${num16}`;
if (num14 >= num15) {
    if (num14 >= num16) {
        document.getElementById('largest_of_three').innerHTML = `${num14} is Largest`;
    }
    else {
        document.getElementById('largest_of_three').innerHTML = `${num16} is Largest`;
    }
}
else {
    if (num15 >= num16) {
        document.getElementById('largest_of_three').innerHTML = `${num15} is Largest`;
    }
    else {
        document.getElementById('largest_of_three').innerHTML = `${num16} is Largest`;
    }
}
// Write a program to check whether a person is eligible for voting (age ≥ 18).
let age = 15;
document.getElementById('age').innerHTML = `Age=> ${age}`;
if (age >= 18) {
    document.getElementById('eligible').innerHTML = "You Are Eligible for Vote";
}
else {
    document.getElementById('eligible').innerHTML = "You Are Not Eligible for Vote";
}
// Develop a program to calculate grade based on marks:90+ → A 75–89 → B 50–74 → C Below 50 → Fail
let mark = 75;
document.getElementById('mark').innerHTML = `Mark=> ${mark}`;
if (mark >= 90) {
    document.getElementById('result').innerHTML = "A Grade";
}
else if (mark >= 75) {
    document.getElementById('result').innerHTML = "B Grade";
}
else if (mark >= 50) {
    document.getElementById('result').innerHTML = "C Grade";
}
else {
    document.getElementById('result').innerHTML = "Fail";
}
// Write a program to check whether a given year is a leap year.
let year = 2024;
document.getElementById('year').innerHTML = `Year=> ${year}`;
if (year % 4 == 0) {
    document.getElementById('leap-year').innerHTML = `${year} is a Leap Year`;
}
else {
    document.getElementById('leap-year').innerHTML = `${year} is not a Leap Year`;
}
// Create a program to check whether a number is divisible by both 5 and 11.
let num17 = 64;
document.getElementById('num17').innerHTML = `Number=> ${num17}`;
if (num17 % 5 == 0 && num17 % 11 == 0) {
    document.getElementById('divide-by-5-11').innerHTML = `${num17} is Devide by Both 5 and 11`;
}
else {
    document.getElementById('divide-by-5-11').innerHTML = `${num17} is not Devide by Both 5 and 11`;
}
// Develop a simple calculator using switch statement to perform addition, subtraction, multiplication, and division.
let num18 = 10;
let num19 = 23;
let choice = 2;
document.getElementById('num18').innerHTML = `Number 1 => ${num18}`;
document.getElementById('num19').innerHTML = `Number 2 => ${num19}`;
switch (choice) {
    case 1:
        let sum = num18 + num19;
        document.getElementById('calc').innerHTML = `Sum of ${num18} and ${num19} is ${sum}`;
        break;
    case 2:
        let sub = num18 - num19;
        document.getElementById('calc').innerHTML = `Subtraction of ${num18} and ${num19} is ${sub}`;
        break;
    case 3:
        let mul = num18 * num19;
        document.getElementById('calc').innerHTML = `Multiplication of ${num18} and ${num19} is ${mul}`;
        break;
    case 4:
        let div = num18 / num19;
        document.getElementById('calc').innerHTML = `Division of ${num18} and ${num19} is ${div}`;
        break;
    default:
        document.getElementById('calc').innerHTML = "Invalid Choice";
        break;
}
// Write a program to calculate BMI and display the health category (Underweight, Normal, Overweight, Obese).
let weight = 50;
let height = 1.58;
let bmi = weight / (height * height);
document.getElementById('weight').innerHTML = `Number 1 => ${weight}`;
document.getElementById('height').innerHTML = `Number 2 => ${height}`;
if (bmi >= 30) {
    document.getElementById('bmi').innerHTML = "You are Obese";
}
else if (bmi >= 25) {
    document.getElementById('bmi').innerHTML = "You are Overweight";
}
else if (bmi >= 18.5) {
    document.getElementById('bmi').innerHTML = "You have Normal Weight";
}
else {
    document.getElementById('bmi').innerHTML = "You are Underweight";
}
// Create a program to calculate electricity bill based on units consumed:First 100 units → ₹5 per unit Next 100 units → ₹7 per unit Above 200 units → ₹10 per unit
let unit = 137;
let amount;
document.getElementById('unit').innerHTML = `Unit => ${unit}`;
if (unit <= 100) {
    amount = unit * 5;
    document.getElementById('elec-amount').innerHTML = `Electricity Bill is ₹${amount}`;
}
else if (unit <= 200) {
    amount = (100 * 5) + ((unit - 100) * 7);
    document.getElementById('elec-amount').innerHTML = `Electricity Bill is ₹${amount}`;
}
else {
    amount = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
    document.getElementById('elec-amount').innerHTML = `Electricity Bill is ₹${amount}`;
}

