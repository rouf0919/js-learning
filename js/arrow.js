const user = {
    username : "rouf",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to my website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Abdul Rauf"
// user.welcomeMessage();
// console.log(this);

// Arrow Function
// function firstname() {
//     let firstname = "Abdul"
//     console.log(this.firstname)
// }
// firstname()

// const firstname = function () {
//     let firstname = "Abdul"
//     console.log(this.firstname)
// }
// firstname()


// const firstname =  () => {
//     let firstname = "Abdul"
//     console.log(this.firstname)
// }
// firstname()

// *explicit return* is when you explicitly write the word return in the function
const addTwoNumber = (num1,num2) => {
    return(num1 + num2);
}
console.log(addTwoNumber(4,5));

// *implicit return* is a way of returning a value from a function without explicitly using the return keyword.
const addThreeNumber = (num1, num2, num3) => (num1+num2+num3)
console.log(addThreeNumber(4,5,6));

