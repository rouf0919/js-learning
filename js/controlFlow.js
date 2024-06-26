// Logic Control

// if

if(2 == "2"){
    console.log("executed")
}

if(2 === "2"){
    console.log("executed")
}

const temptature = 400;
if(temptature === 40){
    console.log("temptature less then 50")
}
else {
    console.log("temprature is greature than 50")
}

//Scope
const score = 200;
if(score > 100) {
    const power = "fly"
    console.log(`user power ${power}`);
}
// console.log(`user power ${power}`); not work because its scope is not global

const balance  = 1000;
if(balance  > 500) console.log("balance lower"),console.log("balance lower"); //its implicit (excutuing in a one line and on last add semicolon)


// nesting
if (balance < 500){
    console.log("balance less than 500")
} else if (balance < 700){
    console.log("balance less than 700")
} else if (balance < 900){
    console.log("balance less than 900")
} else {
    console.log("balance less than 1200")
}

//example and sign
const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard) {
    console.log("user can buy a shoes")
}

//example or(pipe sign)
const loggedInFromEmail = false;
const loggedInFromGmail = false;
if(loggedInFromEmail || loggedInFromGmail) {
    console.log("can do shopping")
}

// Switch 
const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("Aug")
        break;
    case 9:
        console.log("Sept")
        break;
    case 8:
        console.log("Oct")
        break;

    default:
        console.log('default case ,match')
        break;
}

// truthy and falsy value
const userEmail = ""
if(userEmail){
    console.log('Got user email')
}else {
    console.log('dont have user email')
}
// truthy  values ==>  "0", 'false', " ", [], {}, function(){}
// falsy values  ==> false, 0, -0, BigInt 0n, "", null, undefined, NaN

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}


// false == 0 true, false == '' true, 0 == '' true

// Nullish Caolescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 30 ?? 20
console.log(val1)



// Ternary Operator
//  Condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 180 ? console.log("value is lover") : console.log("value is larger")