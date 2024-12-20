// variables and data types

// let , var, const

// var a = 10; // number
// let b = 20;
// const c = 30;
// {
//     let n = "John";
//     var email = "j@j.com"; // strings
// }
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

// let hungry = false;

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

// arrays

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let fruits = ['apple','banana','orange','mango'];
// // console.log(fruits[3]);
// // console.log(typeof(fruits))
// // objects

// let person = {
//     name:'Asim',
//     age:27,
//     gender:'male',
//     email:"j@j.com",
//     intro:function(){
//         alert(`My name is ${this.name} and I am ${this.age} years old and my email is ${this.email}`);
//     }
// }

// console.log(person.name)
// console.log(person['age'])
// person.intro();

// for in

// for(let i in person){
//     console.log(person[i]);
// }
// // for of

// for(let i of fruits){
//     console.log(i);
// }
// forEach

// fruits.forEach(function(fruit){
//     console.log(fruit);
// });
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// map
// let even = numbers.map(function(num){
//     if(num%2==0){
//         return num;
//     }
// })

// console.log(even);
// filter

// let even = numbers.filter(function(num){
//     return num%2==0;
// })

// console.log(even);
// reduce

// let sum = numbers.reduce(function(total,current){
//   return total+current;
// })

// console.log(sum);


// DOM manipulation and event handling  // doucment object model.

// get element by id, get element by class, get element by tag name, query selectors
// create element,append Child,remove child

// innerHTML
// element.attribute
// element.style



// header.innerHTML = 'Change the header';

// let input = document.getElementById('input');

// // input.type = 'password';
// input.value = '123456'
// console.log(input.value);

// header.style.background = 'blue';
// header.style.display = 'block'
// // header.style.visibility = 'hidden';

// let paras = document.getElementsByTagName('p');

// for(let i of paras){
    //     console.log(i);
    //     i.style.color = 'brown';
    // }
    
    
    // let subheader = document.querySelector('.subhead');
    // subheader.style.background = 'yellow';
    
    
    
    // paras[0].innerHTML = 'change the first paragraph';
    // let header = document.getElementById('header');


    // let timeInterval = setInterval(function(){
    //     let d = new Date();
    //     header.innerHTML = d.toLocaleTimeString();
    // },1000)

    // localstorage and sessionstorage
    // let count = localStorage.getItem('count') || 0;
    // let counter =  document.getElementById('counter');
    // counter.innerHTML = count;
    // function inc(){
    //     count++;
    //     localStorage.setItem('count',count);
    //    counter.innerHTML = count;
    // }

    // localstorage.getItem  , setItem , clear.



    // let person  = {
    //     name:'Asim',
    //     age:27,
    //     email:'j@j.com'
    // }

    // localStorage.setItem('person',JSON.stringify(person));

    // let p = JSON.parse(localStorage.getItem('person'))

    // console.log(p.name);

    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');
    let emailInput = document.getElementById('email');

    let usersList = JSON.parse(localStorage.getItem('users')) || [];
    function submit(){
        let person = {
            name:nameInput.value,
            age:ageInput.value,
            email:emailInput.value
        }

        usersList.push(person);

        localStorage.setItem('users',JSON.stringify(usersList));

       
        }

// async programming and promises
