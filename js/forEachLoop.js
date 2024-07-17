

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

// forEach return nothing so its get undefined
const values = coding.forEach( (item)=>{
    console.log(item);
})
console.log(values) 


// Filters(its return value)
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num)=> num > 4) // implicit
console.log(newNums) 
const Nums = myNums.filter( (num)=>{
    return num > 4
}) // implicit
console.log(Nums) 