// Arrays is an object, collection of multiple item in a signle variable, array is resizable, 
const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[0]) 
myArray.push(6)
myArray.push(7)
myArray.pop(6)
myArray.unshift(8)
myArray.shift()
console.log(myArray) 

console.log(myArray.includes(9))  // is 9 included in array

console.log(myArray.indexOf(3))  //value at index 3
//Shallow copy of an object is a copy whose properties share the same refrence
//Deep copy of an object is a copy whose properties do not share the same refrence


// Method Of Array

const myHeros = ['Ali', 'Akram']
console.log(myHeros[1])

const newArr = myArray.join()
console.log(myArray)
console.log(newArr)
console.log(typeof newArr)


// Slice 

const sliceArray = myArray.slice(2,4)
console.log(sliceArray)
console.log('A',myArray)

//  Splice

const spliceArray = myArray.splice(2,4)
console.log(spliceArray)
console.log('A',myArray)

const nameList = ["Ali", "Ahmad", "Akram", "Ashraf"]
const nameList2 = ["Baqer", "Baber", "Babey"]
nameList.push(nameList2)
console.log(nameList)
console.log(nameList2)
console.log(nameList[4][1])

// Concat
const allName = nameList.concat(nameList2)
console.log(allName)

// spread
const spreadName = [...nameList,...nameList2]
console.log('spreadName',allName)


// flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("AbdulRauf"))
console.log(Array.from("AbdulRauf"))
console.log(Array.from({name : "hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))