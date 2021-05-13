/*
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

******  Validate Date With With Date.parse() Method in JavaScript ******

**** RegEx Validation ***





function timeForMilkAndCookies(date) {
    let newDate = Date.parse(date);




	console.log(newDate);
}


timeForMilkAndCookies(new Date(2013, 11, 24))

*/

let num = prompt('Enter a Number');
    if (num > 0){
        alert('The number is 1');
    }
    else if(num < 0){
        alert('The number is -1');
    }
    else{
        alert('The number is 0');
    }
    