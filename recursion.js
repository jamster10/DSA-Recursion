// // Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
// // Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// // Input: 3
// // Output:
// // 3: Another sheep jump over the fence
// // 2: Another sheep jump over the fence
// // 1: Another sheep jump over the fence
// // All sheep jumped over the fence

function sheepCount(num){
  if (num === 0) return "All sheep jumped over the fence";
  return num + `: Another sheep jumps over the fence.` + sheepCount(num - 1)
}

sheepCount(3)

// // Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// // powerCalculatorRec(10,2) should return 100
// // powerCalculatorRec(10,-2) should return exponent should be >= 0

 function powerCalculator(base, power){
   if(power === 0) return 1
   return base * powerCalculator(base, power -1)
  
 }

// powerCalculator(5,3);

// // Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

 function strReverse(str) {
   if (str.length === 1) return str[0]
   return  strReverse(str.slice(1)) + str[0]

 }
// strReverse('hello world')

// // Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

 function triangular(num){
   if(num === 1) return 1
   return num + triangular(num - 1)
}

// triangular(9)

// // Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// // Input: 02/20/2020
// // Output: 02202020

 function splitter(str, splitter){
   if (str.length === 1) {
     if (str === splitter) return '';
     return str;
 } else if (str[0] === splitter) return splitter(str.slice(1)) 
 else return str[0] + splitter(str.slice(1))
}
// splitter('hel/lo worls/')
  
//   // Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

 function fibo(num){
   if (num < 0 ) return 'fib seq lowest value is 0';
   if (num < 2) return (num)
   return fibo(num - 1) + fibo(num -2) 
}

 for (let x = 0; x <10; x++){
   console.log(fibo(x))
}

 function factorial(num){
   if (num === 1) return 1
   return num * factorial(num - 1)
}
// factorial(5)


// //The Maze is represented as a NM matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by ``. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

 //For the above maze, a possible exit can be RRDDLLDDRRRRRR


function mapPath(nestedArr, row = 0, col = 0, position = 0, direction= 'S', path = []){

if (row < 0 || row >= nestedArr.length) return 
if (col < 0 || col >= nestedArr[0].length) return 


path[position] = direction;
position++;

  if(nestedArr[row][col] === 'e'){

    console.log(path);
    return
  }

  if(nestedArr[row][col] === ' '){
    nestedArr[row][col] = 'X';

    //UP

         mapPath(nestedArr, row, col - 1, position ,'L', path)
      mapPath(nestedArr, row , col + 1 , position ,'R', path)
  mapPath(nestedArr, row -1, col , position , 'U', path)
     mapPath(nestedArr, row + 1, col, position ,'D', path)

  

    //RIGHT
  

    //DOWN
   

    //LEFT
       nestedArr[row][col] = ' ';
  }
position--
}


}

mapPath(maze)

// const locationSouth = [loc[0] + 1 , loc[1]];
// return 'D' + mapPath(nestedArr, locationEast )
// }
// }

// let organization = {
//     "Zuckerberg": {    
//         "Schroepfer": {
//             "Bosworth": {
//                 "Steve":{},
//                 "Kyle":{},
//                 "Andra":{}
//             },
//             "Zhao": {
//                 "Richie":{},
//                 "Sofia":{},
//                 "Jen":{}
//             },
//             "Badros": {
//                 "John":{},
//                 "Mike":{},
//                 "Pat":{}
//             },
//             "Parikh": {
//                 "Zach":{},
//                 "Ryan":{},
//                 "Tes":{}
//             }
//         },
//         "Schrage": {
//             "VanDyck": {
//                 "Sabrina":{},
//                 "Michelle":{},
//                 "Josh":{}
//             },
//             "Swain": {
//                 "Blanch":{},
//                 "Tom":{},
//                 "Joe":{}
//             },
//             "Frankovsky": {
//                 "Jasee":{},
//                 "Brian":{},
//                 "Margaret":{}
//             }
//         },
//         "Sandberg": {
//             "Goler": {
//                 "Eddie":{},
//                 "Julie":{},
//                 "Annie":{}
//             },
//             "Hernandez": {
//                 "Rowi":{},
//                 "Inga":{},
//                 "Morgan":{}
//             },
//             "Moissinac": {
//                 "Amy":{},
//                 "Chuck":{},
//                 "Vinni":{}
//             },
//             "Kelley": {
//                 "Eric":{},
//                 "Ana":{},
//                 "Wes":{}
//             }
// }}};


// const data = {
//   Zuckerberg:{
//     Schroepfer:{
//       Bosworth: ['Steve', 'Kyle', 'Andra'],
//       Zhao:['Richie', 'Sofia', 'Jen']
//     },
//     Schrage:{
//       VanDyck:['Sabrina', 'Michelle', 'Josh'],
//       Swain: ['Blanche', 'Tom', 'Joe']
//     }, 
//     Sandberg:{
//       Goler:['Eddie', 'Julie', 'Annie'],
//       Hernandez:['Rowi', 'Inga', 'Morgan'],
//       Mossinac:['Amy', 'Chuck', 'Vinni'],
//       Kelley:['Eric', 'Ana', 'Wes']
//     }
//   }
  
// }
// function flatten (section, tabCount = 0){
// let count = 0;
// const spaces ='  '.repeat(tabCount);
 
//   for (let key in section){
//     console.log(spaces + key)
//     flatten(section[key], tabCount + 1)
//   }
// }

// const arr = {
//   name:['a','b', 'c', 'd'],
//   last:['z','x','c', 'v']
// }



// flatten(organization)
// // const values = Object.values(data);
// // //console.log(values[0])
// // // console.log(Object.entries(data))
// // console.log(values[0])

// // const recurs = Object.values(values[0])
// // console.log(recurs[0])




//FROM Solution:

An anagram is any word or phrase that exactly reproduces the letters in another order. 
Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
and non-words like tsae.
Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
— ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
Continue this way until you find all the anagrams for east. There should be 24 of them.
Input: 
Output: 
*/

function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}


//Write a recursive function that prints out the binary representation of a given number.
// input: 5
//output: 101

function binaryRep(input){
    if(input<=0){
        return '';
    } 
    let binary = Math.floor(input%2);
    return binaryRep(Math.floor(input/2)) + binary

}
credit for last 2: https://gist.github.com/tparveen/ff44085ae042b90068da5432b34f023c
