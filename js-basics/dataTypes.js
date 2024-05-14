"use strict" //treat all JS code as newer version
// alert(3 + 3) // we are using nodesjs, not browser
console.log(3 
    + 3)  // code readability should be high
console.log("Rauf")
//Primitive:call by value => 7types {string,number,boolean,null,undefined,symbol,BigInt}
let age = 35 //number => 2 to power 53
const bigNumber = 1234567899864n  // bigint
let name = "rouf"  //String  => ""
let isLoggedIn = false //Boolean => true/false
const outsideTemp = null // null => standalone value
let userEmail; // undefined  => not value assigned for now
const id = Symbol(123) // symbol => unique
const anotherId = Symbol(123)
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