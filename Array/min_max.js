/**
 * Write a program in the following steps
    a. Generates 10 Random 3 Digit number.
    b. Store this random numbers into a array.
    c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
 *
 * @author: SAYANI KOLEY
 * @since: 22.07.2021
 */

let MAXCOUNT = 10;
let count = 0;
const number = [];

while ( count < MAXCOUNT ) {
    number[count] = Math.floor ( Math.random() * 900) + 100;
    count++;
}
console.log("Random numbers: " +number);

let max = secondMax = number[1];
let min = secondMin = number[1];

for (i = 0; i < number.length; i++) {
    if ( number[i] > max ) {
        secondMax = max;
        max = number[i];
    }
    else if ( number[i] > secondMax && number[i] != max ) {
        secondMax = number[i];
    }
    if ( number[i] < min ) {
        secondMin = min;
        min = number[i];
    }
    else if ( number[i] < secondMin && number[i] != min ) {
        secondMin = number[i];
    }
}

console.log("Second Max is: " +secondMax);
console.log("Second Min is: " +secondMin);