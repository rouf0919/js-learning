// for 
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

// Nested Loops
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop i value = ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
}

// for
const myarray = ["ali", "ahmad",  "rauf"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element)
}

// Break & Continue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 is detected")
        break;
    }
    console.log(`value of i = ${i}`)
}
// Break & Continue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 is detected")
        continue;
    }
    console.log(`value of i = ${i}`)
}