// variables and data types

// let , var, const

var a = 10; // number
let b = 20;
const c = 30;
{
    let n = "John";
    var email = "j@j.com"; // strings
}
// c = 50
// conditionals
// if else, switch, ternary operator

// falsy values,--> false, 0, null, undefined, NaN

// let coin = 'gold';

// if (coin === 'heads'){
//     console.log('win');
// } 
// else if(coin === 'tails'){
//     console.log('lose');
// }
// else{
//     console.log('invalid coin value');
// }

// let light = 'black';

// if(light === 'red'){
//     console.log('stop');
// }
// else if(light === 'yellow'){
//     console.log('slow down');}
// else if(light === 'green'){
//     console.log('go');
// }
// else{
//     console.log('invalid light value');
// }


// switch case

// let light = 'red';

// switch(light){
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('slow down');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//     default:
//         console.log('invalid light value');
// }


// let morning = 'false'; // boolean

// morning==="true"? console.log('good morning') : console.log('good evening');


// functions

// type of functions --> 
//  named function 2)
// function jump(){
//     console.log('jump');
// }

// greet('Asim');
// greet('Nasir');

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// cry();

//  anonymous function 3) 

// let cry = function(){
//     alert(`I don't hava a name`);
// }

//  arrow function 4)

// let add  = (a,b)=>a+b;



// let makeSquare = n=>n*n;


// // pop up boxes --> alert(''), prompt(''), confirm('');

// let number = parseFloat(prompt('write a numbmer to find its square'));

// alert(makeSquare(number));

// let mad = confirm('Are you crazy?');

// if(mad){
//     alert('take medication');
// }
// else{
//     alert('do not take medication');
// }




// IIFE 5)
// immediately invoked function expression

// (function(){alert('I am an IIFE')})();


//   higher order functions 6) 

// setTimeout(function(){alert('hakuna matata')},5000);


// let car = {
//     start:function(){console.log(this)},
//     stop:()=>{console.log(this)}
// }

// car.stop();
//   callback functions




// loops


// for loop
// for(let i=1;i<=10;i++){
//     console.log(i*8)
// }

// while loop

let hungry = false;

// while(hungry){
//     hungry = confirm('are you hungry?');
//     if(hungry){
//         alert('eat something');
//     }
// }

// do while loop
// do{
//     alert('eat something');
//     hungry = confirm('are you still hungry?');
// }
// while(hungry);
// for in 
// for of
// forEach
// map 
// filter
// reduce

// arrays
// objects
// DOM manipulation and event handling
// async programming and promises
