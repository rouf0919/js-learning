// Exection Types
console.log("1.Global Execution Context")
console.log("2.Function Execution Context")
console.log("3.Eval Execution Context")

// program Execution Context
console.log("1.Global Execution Context -> this")
console.log("2.Memory Creation Phase")
console.log("3.Execution Creation Phase")

let val1 = 10
let val2 = 15 
function addNum(){
    let total = num1 + num2;
    return total;
}
let result1 = (val1,val2);
let result2 = (2,3);

//Call Stack
console.log("follow LIFO(Last In First Out) method")
function one(){
    console.log("one")
}
function two(){
    console.log("Two")
}
function three(){
    console.log("Three")
}
one();
two();
three();