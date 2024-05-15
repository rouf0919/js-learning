const name = "AbdulRauf"
const age = 30
console.log(name + age) // previous way to concatinate string
console.log(`My name is ${name} and my age is ${age}`)

const myName = new String("Abdul-Rauf")
console.log(myName[0])

console.log(myName.__proto__)
console.log(myName.length)
console.log(myName.charAt(2))
console.log(myName.indexOf('u'))
console.log(myName.toLocaleUpperCase())

//Substring, can not use negative values

const newName = myName.substring(0,4)
console.log(newName)

//Slice, can also use negative values
const anotherNameName = myName.slice(-8,4)
console.log(anotherNameName)

// Trim => remove starting and end spaces
const trimString = " rauf "
console.log(trimString)
console.log(trimString.trim())

// Replace
const replaceString = "https://rauf.com/rauf%20khokhar"
console.log(replaceString.replace('%20','-'))

//can find a specific part in a string)
console.log(replaceString.includes('rauf'))

// can convert string to array by using split method
console.log(myName.split('-'))