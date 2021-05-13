/*
//http://javascript.info

***********************************
//Conditional branching: if, '?'
***********************************
*/

/*
Show the sign:

Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
***************************************
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
****************************************
*/

 /*
Rewrite 'if' into '?':

Rewrite this 'if' using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*****************************************

let a = Number(prompt('Enter a number for first number'));

let b = Number(prompt('Enter a number for second number'));


result = (a + b < 4) ? 'Below':'Over';

    alert(result);

******************************************
*/

/*
Rewrite 'if..else' into '?'

Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*****************************************
*/

/*
let login, message;


message = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings': (login == '') ? 'No login': '""';


console.log(message);
*******************************************
*/

/*
//http://javascript.info

***********************************
//Logical Operators
***********************************
*/
//The OR or || Logical Operator

/*
let hour = 9;

if (hour < 10 || hour > 18){
    document.write('The office is closed!');
}
else{
    document.write('The Office is Open!...Come in please.');
}
*/
/*
let firstName = "";
let lastName = "";
let nickName = "Jokers";

document.write((firstName||lastName||nickName||'No name is given...'));
*/

let nums = [6,8,7,3,4, 1];


for (num of nums){
 num !== 8 || console.log('number found');


}

console.log('not found'); 
   