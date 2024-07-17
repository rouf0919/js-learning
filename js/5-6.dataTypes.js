"use strict" //treat all JS code as newer version
// alert(3 + 3) // we are using nodesjs, not browser
console.log(3 + 3)  // code readability should be high
console.log("Rauf")

// https://tc39.es/ecma262/ // official documentation

//Primitive:call by value => 7types {string,number,boolean,null,undefined,symbol,BigInt}
let age = 35 //int/number => 2 to power 53
const bigNumber = 1234567899864n  // bigint
let name = "rouf"  //String  => ""
let isLoggedIn = false //Boolean => true/false
const outsideTemp = null // null => standalone value, type of null is object
let userEmail; // undefined  => not value assigned for now
const id = Symbol(123) // symbol => unique
const anotherId = Symbol(123)

let score = "33"
console.log(typeof score)
console.log(typeof(score))

let valueNumber = Number(score)
console.log(typeof valueNumber)

// whent the value is '33' to convert number its give 33
// whent the value is '123abc' to convert number its give NAN
// whent the value is 'null' to convert number its give 0
// whent the value is 'undefined' to convert number its give NAN
// whent the value is 'true' to convert number its give 1
// whent the value is 'false' to convert number its give 0


// Convert number to boolean 
// 1 => true
// 0 => false
// "" => false
// "rouf" => true


// object

console.log(typeof "rouf")
console.log(typeof undefined)
console.log(typeof null)

//Not-Primitive (Refrence) => Arrays,Objects,Functions
const names = ["Ali", "Abdul", "Akram"] //Array
let obj = {
    myName : "Abdul Rauf",
    age : 25,
} //Object

const myFunction = function() {
    console.log("Hello World")
} //function
//JavaScript is statically typed or dynamically typed => its a dynsmically typed