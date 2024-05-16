function sayMyName(){
    console.log("A")
    console.log("B")
    console.log("D")
    console.log("U")
    console.log("L")
    console.log("R")
    console.log("A")
    console.log("U")
    console.log("F")
}
// sayMyName()

//Add Two Number Function
function addTwoNumber(number1, number2) /*its parameter*/ {
    console.log(number1 + number2)
}
addTwoNumber(3,4) // its an argument

const result = addTwoNumber(3,4)
console.log("Result:",result)

//Add Two Number Function
function addTwoNumberReturn(number1, number2) /*its parameter*/ {
  return number1 + number2
}
// addTwoNumber(3,4) // its an argument

const resultReturn = addTwoNumberReturn(3,4)
console.log("Result:",resultReturn)

// Login Message Functin
function loginUserMessage(user){
    if(!user){
        console.log("please enter user name")
        return
    }
    return `${user} just logged in` 
}
console.log(loginUserMessage("Rauf"))

// rest operator in function
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 300))
/*-----Object in function---*/
const dataInfo = {
    name: "Rauf",
    price: "200"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`)
}
// handleObject(dataInfo)
handleObject({
    name: "Rauf",
    price: "200"
})

/*-----Array in function---*/
const myArray = [100, 200, 300, 400, 500]
function returnArrayValue(getArray) {
    return getArray[2]
}
console.log(returnArrayValue(myArray))