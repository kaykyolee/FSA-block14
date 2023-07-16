//this is the Only Odds portion of the assignment
 //1. define an array of numbers 
 //2. create a syntax that would print the odd values only 

// const array1 = [2,4,6,8,11,20,15,22]
// array1.splice(0,4)
// array1.pop()
// array1.splice(1,1)
// console.log(array1)

// const array2=[1,2,3,4,5,6,7,8,9,10]
// array2.pop()
// array2.splice(1,1)
// array2.splice(2,1)
// array2.splice(3,1)
// array2.splice(4,1)
// console.log(array2)

// const array3=[70,42,55,81,21,91,34]
// console.log(array3.slice(2,6))

// const array4=[2, 4, 6, 8, 10, 11, 12] 
// console.log(array4.slice(5,6))

//this is the Vowel versus Consonant portion of the assignment 
//1. define array for the words
//2. create a for loop to detect the vowels and consonats 
//3. make sure the console.log prints the expected message

// const word1 = "hello";
// let placeholder1 = [];
// let vowels1 = [];
// let consonants1 = [];
// for (let i = 0; i < word1.length; i++) {
//   let char = word1[i];
//   placeholder1.push(char);
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     vowels1.push(char);
//   } else {
//     consonants1.push(char);
//   }
// }
// console.log(word1 + " has " + consonants1.length + " consonants and " + vowels1.length + " vowels");


// const word2="ukelele"
// let placeholder2 = [];
// let vowels2 = [];
// let consonants2 = [];
// for (let i = 0; i < word2.length; i++) {
//   let char = word2[i];
//   placeholder2.push(char);
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     vowels2.push(char);
//   } else {
//     consonants2.push(char);
//   }
// }
// console.log(word2 + " has " + consonants2.length + " consonants and " + vowels2.length + " vowels");

// const word3="awesome"
// let placeholder3 = [];
// let vowels3 = [];
// let consonants3 = [];
// for (let i = 0; i < word3.length; i++) {
//   let char = word3[i];
//   placeholder3.push(char);
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     vowels3.push(char);
//   } else {
//     consonants3.push(char);
//   }
// }
// console.log(word3 + " has " + consonants3.length + " consonants and " + vowels3.length + " vowels");

// const word4="onomonopia"
// let placeholder4 = [];
// let vowels4 = [];
// let consonants4 = [];
// for (let i = 0; i < word4.length; i++) {
//   let char = word4[i];
//   placeholder4.push(char);
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     vowels4.push(char);
//   } else {
//     consonants4.push(char);
//   }
// }
// console.log(word4 + " has " + consonants4.length + " consonants and " + vowels4.length + " vowels");

// const word5="textbook"
// let placeholder5 = [];
// let vowels5 = [];
// let consonants5 = [];
// for (let i = 0; i < word5.length; i++) {
//   let char = word5[i];
//   placeholder5.push(char);
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     vowels5.push(char);
//   } else {
//     consonants5.push(char);
//   }
// }
// console.log(word5 + " has " + consonants5.length + " consonants and " + vowels5.length + " vowels");

//this is the Reverse Array portion of the assignment 
//1. define array as the numbers shown
//2. create a for loop to reverse the numbers  
//3. make sure the console.log prints the expected order

// const Nums1 = [1, 2, 3]
// let reverseNums1 = []
// for (let i = Nums1.length-1; i >= 0; i--){
//     reverseNums1.push(Nums1[i]);
// }
// console.log(reverseNums1)

// const Nums2 = [1,3,5,7,11]
// let reverseNums2 = []
// for (let i = Nums2.length-1; i >= 0; i--){
//     reverseNums2.push(Nums2[i]);
// }
// console.log(reverseNums2)

// const Nums3=[20, 50, 30, 60, 200]
// let reverseNums3 = []
// for (let i = Nums3.length-1; i >= 0; i--){
//     reverseNums3.push(Nums3[i]);
// }
// console.log(reverseNums3)

// const Nums4=[1, -1, 2, -3, 5, -8, 13]
// let reverseNums4 = []
// for (let i = Nums4.length-1; i >= 0; i--){
//     reverseNums4.push(Nums4[i]);
// }
// console.log(reverseNums4)

//this is the FizzBuzz portion of the assignment 
//1. create a for loop to filter the numbers 1-100 correctly    
//. make sure the console.log prints the expected order

for(let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 !== 0){
            console.log("Fizz");
        }
    else if (i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz");
        }
    else if (i % 5 === 0 && i % 3 == 0){
        console.log("FizzBuzz");
    }}
