// import $ from 'jquery';

let firstName = 'Tremain';
let States = 50;//represents the # of states in the US
const num1 = 5;
const num2 = 4;
let sum = add(num1, num2);//function that will calculate the sum of the mentioned #'s
const sayHello:string = 'Hello World!';// you have to define the name of the function too, if you want the resulting call of the function (the console.log) to show up correctly
// const checkAge = checkAge;
let script = 'Hello, World!';
//var getLength = getLength;

let nest = [
    {name: "Charles", age: 21},
    {name: "Abby", age: 27},
    {name: "James", age: 18},
    {name: "John", age: 17},
];

let house = [
    {name: 'Johan', age: 13},
    {name: 'Freeda', age: 16},
    {name: 'Birch', age: 10},
    {name: 'Felicity', age: 25},
    {name: 'Winter', age: 24},
];


console.log(sayHello);
console.log(sum);
console.log(script.length);

let veggietales: string[] = [ 'Carrots', 'Broccoli', 'Celery', 'Cucumber', 'Potatoes'];

let count = 0;
while(count< veggietales.length) {
    console.log(veggietales[count]);
    count++;
}

let count2=0;
while (count2 < 4){
    checkAge(nest[count2].name, nest[count2].age);
    count2++;
} //this loop is what the checkage function uses to cycle through the nest array which consists of all of the names and ages.
//t is just a variable to represent where the code should start
//used the parameter (t<4) because I technically only have 3 objects, since list items start at 0.

function add(num1: number, num2: number){
    return num1 + num2;
};

sayHello2();
function sayHello2() {
    return alert('Hello World!');
};

function checkAge (name: string, age: number) {
    if (age < 21) {
       console.log ('Sorry, ' + name + ' you shall not pass!');
    } //this is the function for the "you aren't old enough to view this page prompt."
}; // I don't have to console.log outside of this because its already being called upon by the 'while' function above.


let t=0;
while (t < 5){
    checkAge(house[t].name, house[t].age);
    t++;
} //this loop is what the checkage function uses to cycle through the nest array which consists of all of the names and ages.
//t is just a variable to represent where the code should start
//used the parameter (t<5) because I technically only have 4 objects, since list items start at 0.



function getLength(script: string) {
    if (script.length % 2 == 0){
       return ('The world is nice and even!');
    } else {
      return ('The world is an odd place!');
    }
}
console.log(getLength(script));

// interface IPerson {
//     name: string;
//     age: number;
// }