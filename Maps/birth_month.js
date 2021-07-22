/**
 * Write a Program to generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays
   in the same month. Store it to finally print.
 * @author: SAYANI KOLEY
 * @since: 22.07.2021  
 */

let specific_month = new Map();
let i = 1;
function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue) {
        specific_month.set(i, key);
        i++;
      }
    }
    return specific_month;
}

let month = new Map();
let count = 1;
let MAXCOUNT = 50;

while ( count <= MAXCOUNT ) {
    let birth_month = Math.floor ( Math.random() * 12 ) + 1;

    if ( birth_month == 1 ) {
        month.set(count, "January");
    }
    else if ( birth_month == 2 ) {
        month.set(count, "February");
    }
    else if ( birth_month == 3 ) {
        month.set(count, "March");
    }
    else if ( birth_month == 4 ) {
        month.set(count, "April");
    }
    else if ( birth_month == 5 ) {
        month.set(count, "May");
    }
    else if ( birth_month == 6 ) {
        month.set(count, "June");
    }
    else if ( birth_month == 7 ) {
        month.set(count, "July");
    }
    else if ( birth_month == 8 ) {
        month.set(count, "August");
    }
    else if ( birth_month == 9 ) {
        month.set(count, "September");
    }
    else if ( birth_month == 10 ) {
        month.set(count, "October");
    }
    else if ( birth_month == 11 ) {
        month.set(count, "November");
    }
    else if ( birth_month == 12 ) {
        month.set(count, "December");
    }
    count++;
}

console.log("Displaying the birth month of 50 individuals");
console.log(month);

console.log("Displaying only the key values of a specific month");
console.log(getByValue(month, 'January'));

