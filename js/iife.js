//Immediately Invoked Fucnction Expression (IIFE)
(function printMessage() {
    console.log("DB Connected");
})(); // just wrap your function in a parenthesis and add excuted parenthesis at the end of the function

(() => {
    console.log("DB 2 Connected");
})();

((name) => {
    console.log(`DB 2 Connected ${name}`);
})("Abdul Rauf")
