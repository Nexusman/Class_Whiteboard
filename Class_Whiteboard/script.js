

// JAVASCRIPT WHITEBOARD
/*
let num;{
    num = Number(prompt('Please Pick a Number'));

    if (num < 10){
        console.log('The number is less than 10');
    }
    else if (num < 100){
        console.log('The number is greater than 10 but less than 100');
    }
    else{
        console.log('The number is greater than 100');    
    }
}
*/
/*
let num;{
    num = 10;
    while (num <= 125){
        console.log(num);
        num = num + 10;
    }
}
*/


/*
let result, counter;{
    result = 1;
    counter = 0;
    while(counter < 10){
        result = result * 2;
        counter = counter + 1;
    }
    console.log(result);
}
*/

/*
let yourName;{
    do {
        yourName = prompt('Who are you?');
    }
        while(!yourName);

        console.log(yourName);
}
*/

/*
let result;{
    result = 1;
    for(let i = 0; i < 10; i++){
        result = result * 2;        
    }
    console.log(result);
}
*/

/*
for (let i=20;; i++){
    if (i % 3 == 0){
        console.log(i);
        break;

    }
}
*/

/*
switch(prompt('What is the weather?')){

    case '18':
        console.log('Umbrella');
        break;
    case 'sunny':
        console.log('Hot!')
        break;
    case 'cloudy':
        console.log('Look Out')
        break;
    default:
        console.log('Dont Know')
        break;
}
*/

/*
//LOOPING A TRIANGLE:
let couter, result;{
    couter=0
    result='#'
}

  while(couter<7){
      console.log(result);
      couter = couter + 1;
      result = result +"#"
}
*/

/*
FIZZBUZZ INTERVIEW QUESTION: Eloquent Javascript Book Page 39.
*/

for(let i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
    console.log('FIZZBUZZ '+ i);
    }

    else if(i % 5 == 0 ){
        console.log('BUZZ ' + i); 
    } 
    
    else if( i % 3 == 0){
        console.log('FIZZ' + i);
    }
   else{
       continue;
   } 
}
