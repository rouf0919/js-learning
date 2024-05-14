//  Two Type Of Memory 1.Stack 2.Heap  
//1.Primitive Data Type USe Stack Memory And 2.Non Primitive Data Type Use Heap Memory

//Stack Memory
let fullName = "Abdul Rauf"
let anotherName = fullName
anotherName = "Skhawat Alif"

console.log(fullName)
console.log(anotherName)


let userName = {
    name : "Ali Raza",
    age : "30"
}

let userTwo = userName
userTwo.name = "Abdul Rauf"
console.log(userName.name)
console.log(userTwo.name)