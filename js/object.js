/*----------- Object Literals ------------*/
const mySymbol = Symbol("key1")
const jsUser = {
    name: "Rauf",
    age: 26,
    "full name": "Abdul Rauf",
    location: "Lahore",
    [mySymbol]: "mykey1",
    email: "rouf0919@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["email"]);  //another method to access object
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);

// updating object values
jsUser.email = "abrouf@gmail.com";

// we can freeze object to prevent updating their value
Object.freeze(jsUser);
jsUser.email = "test@gmail.com"; // This will not update because the object is frozen
console.log(jsUser.email);

// Function in an object
jsUser.greeting = function(){
    console.log("Hello Js User");
}

// console.log(jsUser.greeting()); // This will print "Hello Js User"

jsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
}
// console.log(jsUser.greetingTwo())

/*-----------object.create-> Signleton  => made by constructor (contructor method) ------*/

const user = {}
// console.log(user)
user.id = 123
user.name = "Skhawat Ali"
user.email = "skhawat@gmail.com"
user.isLoggedIn = true
user.location = "Lahore"
console.log(user)

// Nesting objects
const regularUser = {
    email : "new@gmail.com",
    fullName : {
        userFullName: {
            firstName : "Abdul",
            LastName : "Rauf"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName)

/*---------- Combining Objects-----*/
const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "c",4 : "d"}
const obj3 = {5 : "e",6 : "f"}
const obj4 = Object.assign({}, obj1, obj2, obj3) //first method to combine array
const obj5 = {...obj1, ...obj2, ...obj3} //first method to combine array
console.log(obj5)

// getting data from data base using object
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("isLoggedIn"))


/*-------Destructuring in object------------*/