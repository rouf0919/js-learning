// For OF Loop
const arr=[1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(`valu of num is ${num}`)
}

const greetings="Hello Wolrd"
for(const greet of greetings){
    console.log(`Each character is ${greet}`)
}

//Map maps called for unique values
const map= new Map();
map.set('Pak',"Pakistan")
map.set('USA',"United State Of America")
map.set('IN',"Indai")
// console.log(map)
for (const [key,value] of map) {
    console.log(key, ':-', value)
} // map is not iterable
// for and for off loops not work for objects that why we use for in loop



// For In loop for object
const myObjects={
    js: "javaScrips",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObjects){
    console.log(`${key} is shortcut of ${myObjects[key]}`)
} // for in get key by defaults
// for in for array 
const newArr = ["js", "rb", "cpp", "java"]
for(const key in newArr){
    console.log(newArr[key])
}


//for each loop
const coding = ["js", "rb", "cpp", "java", "python"]
coding.forEach(function (item){
    // console.log(`language name ${item}`)
})
coding.forEach( (item) => {
    console.log(`language name ${item}`)
})

// forEach by refrence function
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach( (key, index, arr)=> {
    console.log(key, index, arr)
}) // foreach also give another values

const myCoding = [
    {languageName: "javascripts",languageFileName: "js"},
    {languageName: "c++",languageFileName: "cpp"},
    {languageName: "swift by apple",languageFileName: "swift"},
    {languageName: "ruby",languageFileName: "rb"}
]
myCoding.forEach( (key)=> {
    console.log(key.languageFileName)
})