// Date
let myDate = new Date()
console.log(myDate) //2024-05-15T04:19:59.028Z
// not looks good that's why change to string
console.log(myDate.toString()) //Wed May 15 2024 04:20:31 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()) //Wed May 15 2024
console.log(myDate.toLocaleString()) // 5/15/2024, 4:22:27 AM
console.log(myDate.toISOString()) // 2024-05-15T04:22:27.934Z
console.log(myDate.toJSON()) // 2024-05-15T04:22:27.934Z

console.log(typeof myDate)  // object

// let myCreatedDate = new Date(2024, 4 , 15) // Wed May 15 2024
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date("2024-05-15") // 5/15/2024, 12:00:00 AM
console.log(myCreatedDate.toLocaleString())

/*----------------------Tiem Spam-------------*/
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime())


let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday: "long"
})