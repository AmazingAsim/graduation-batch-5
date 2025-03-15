// let a:number  =10;
// let name:string = "hello";
// let Alive:boolean = true;
// let money:null = null;
// let x:undefined = undefined;
// let s:any = 1

// // non primitive data types

// let fruits:string[] = ["apple","banana","mango"];
// let evenNumbers:number[] = [2,4,6,8];
// let mix:(number | string)[] = [1,"hello",2,"world"];

// let person:[string,number] = ["John",10];
// console.log(person);

// let student:{name:String,email:String,remote:boolean} = {
//     name:"John",
//     email:"g5m5o@example.com",
//     remote:true
// }

// let students:{name:String,email:String,remote:boolean}[] = [
//     {
//         name:"John",
//         email:"g5m5o@example.com",
//         remote:true
//     }
// ]

// enum Cards{
//     Spade='Spade',
//     Heart = 'Heart',
//     Club = 'Club',
//     Diamond= 'Diamond'
// }

// let ace1:Cards = Cards.Spade;
// let ace2:Cards = Cards.Heart;

// console.log(ace1);

// let friends = {};
// (friends as {name:string}).name = "John";

// type Car = {
//     name:string,
//     model:string,
//     year:number,
//     brand:String,
//     powerWindow:boolean
// }



// let vetara:Car = {
//     name:"Vetara",
//     model:"Vetara",
//     year:2022,
//     brand:"Suzuki",
//     powerWindow:true
// }

// type studentId = Number | string;


// interface hero{
//     name:string ,
//     strength:number,
//     speed:number
// }

// interface hero{
//     wealth:number
// }

// interface Superhero extends hero{
//     superPower:string
// }

// let peter:hero = {
//     name:"Peter",
//     strength:10,
//     speed:20,
//     wealth:100
// }

// let spiderMan:Superhero={
//     superPower:"spider sense",
//     name:"Spider Man",
//     strength:10,
//     speed:20,
//     wealth:100
// }

// function add(a:number,b:number):String{
//   return `${a} + ${b} = ${a+b}`
// }

// function jump():void{
//     return  void 5
// }

// function playGame():never{
//     while(true){
//         console.log("playing");
//     }
// }


// console.log(jump());

// class Car{
//     model:String;
//     readonly color:String; // readonly,public,private,protected
//     year:number;
//    constructor(model:String,color:String,year:number){
//      this.color = color;
//      this.model = model;
//      this.year = year
//    }

//    intro(){
//      console.log(`This is a ${this.year} ${this.color} ${this.model}`);
//    }
// }

// let newcar = new Car("Vetara","Red",2022);

// class SUV extends Car{
//     powerWindow:boolean;
//     constructor(model:String,color:String,year:number,powerWindow:boolean){
//         super(model,color,year);
//         this.powerWindow = powerWindow
//     }
//     displayColor(){jlksddvsdjlkvsdjlkdldklkj   
//         console.log(this.color)
//     }
// }

// let newSUV = new SUV("Scorpio","white",2020,true);

// console.log(newSUV.color);
// newSUV.color = "black";



// function countLenth(a:string[]):number{
//     return a.length;
// }

// countLenth(["a","b","c"]);


// function countLenth2(a:number[]):number{
//     return a.length;
// }

// countLenth2([1,2,3]);


// function getLength<T>(a:T[]):number{
//     return a.length;
// }

// getLength<string>(["a","b","c"]);

// interface HasLength{
//     length:number
// }

// function logLength<T extends HasLength>(a:T){
//     console.log(a.length);
// }

// logLength("hello");
// // logLength([1,2,3]); 
// // logLength(['a','b','c']);
// // logLength({length:10})
// // logLength(5);

// interface Box<T>{
//     value:T
// }

// const box:Box<number> = {
//     value:10
// };

// console.log(box);



// function merge<A,B>(obj:A,obj2:B):A&B{
//     return {...obj,...obj2};
// }

// merge({a:"hello"},{b:2});
// const apple = 'apple';
// console.log(apple);

import add from './math'
console.log('hello ts');