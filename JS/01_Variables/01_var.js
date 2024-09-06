//Null has the type object 
//let makes the variables local 
//var is used to make variables global
//const variables cannot be changed

let a = "Aditya";
let b = 10; 
let c = null;
console.log(a + " " + b);
console.log(typeof a, typeof b, typeof c);

const d = 50;
// d = d + 10 

let o = {  //creating an object
    name: "Aditya",
    "Last name" : "Khatawkar" //use quotations for space seperated words in the object literal.
}

console.log(o)

o.age = 20  //adding new item to the object

console.log(o)