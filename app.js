// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]




function letsSee(testArray){
    let result = testArray.filter(testArray => testArray % 2 == 0);
    console.log(`Even Numbers: ${result}`)

    let result2 = testArray.filter(testArray => testArray % 2 != 0);
    console.log(`Odd Numbers: ${result2}`);
}

let prac = new Array(1,2,3,4,5,6,7,8,9);
console.log(letsSee(prac));

// // Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// // Example 1:                                                                                                                                       
// // Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// // Output: primeArray = [2,3,5,7]
// // Example 2:
// // Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// // Output: primeArray = [19 ,29 ,47 , 83]

// function checkPrime(number) {
//     if (number <= 1) {
//         return false
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// let arr = [2, 3, 9, 12, 19, 20]
// let prime = []
// arr.forEach(function (element) {
//     const isPrime = checkPrime(element);
//     if (isPrime) {
//         prime.push(element)
//         console.log(`${element} is primeeee! `)
//     } else {
//         console.log(`${element} is not prime`)
//     }
// });
// console.log(prime);






// MEDIUM (1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’
// function vowelChecker(x) {
//     var vowel = x.toLowerCase();
//     //charAt(0);
//     if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" || vowel != "y") {
//         console.log("It's a vowel!");
//     }
//     else {
//         console.log(`It's NOT a vowel.`);
//     }
// }
// console.log(vowelChecker('y'))

// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the 
// second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//   String 2: Dogs eat ants
// Output: False
// function twoStrings(string, cheese){
//     console.log(`String 1: ${string}`);
//     console.log(`String 2: ${cheese}`);
// let check1 = string.length;
// let check2 = cheese.length;


// if (ana === gram){
//     console.log(`true`);
// }
// else {
//     console.log(`false`);
// }
// }

// twoStrings('racecar', 'car race');

function anagramChecker(hello, goodbye) {
    let same1 = hello.length;
    let same2 = goodbye.length;
    (same1 != same2) 
    let str1 = hello.split('').sort().join('');
    let str2 = goodbye.split('').sort().join('');
    if (str1 === str2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
anagramChecker("dog", "god");
anagramChecker("medium", "hard");
anagramChecker("hat", "ath");

// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two 
// numbers without a remainder. 
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6
function twoNums(x,z){
if ((x,z)>= 0 && (typeof (x,z) === 'number')){
    x = Math.abs(x);
    z = Math.abs(z);
    while(z){
        var v = z;
        z = x % z;
        x = v;
    }
    console.log(x);
}
else{
    return false;
}
}

twoNums(336,360);
// Medium (4)
// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; 
// A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new 
// mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063


let car = {
    make: 'Honda',
    model: 'Civic',
    year: 2018,
    mileage: 4000,
    color: 'Black',
    driveToWork: function(a){
        a = 27;
        console.log(`Old mileage: ${this.mileage} | new mileage ${this.mileage + a}`);
        updatedM = this.mileage + a;
    },
    driveAroundTheWorld: function(b){
        b = 765;
        console.log(`Old mileage: ${updatedM} | new mileage ${updatedM + b}`);
        updatedM2 = updatedM + b;
    },
    runErrands: function(c){
        c = 15;
        console.log(`Old mileage: ${updatedM2} | new mileage ${updatedM2 + c}`);
    }
}
car.driveToWork();
car.driveAroundTheWorld();






// Hard (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of 
// matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

let match = (input) => {
    let brackets = "{}, [], ()"
    let stack = []
    for (let bracket of input) {
        let index = brackets.indexOf(bracket)
        if (index % 2 === 0) {
            stack.push(index + 1)
        } else {
            if (stack.pop() !== index) {
                return false;
            }
        }
    }
    return stack.length === 0
}
console.log(match('([]) [{}] {(())}'));
console.log(match('([])[{}] {(([))}'));
console.log(match('{()} []'));