
// In asynchronous JavaScript, callbacks are functions passed as arguments to other functions to be executed later, 
// typically after some asynchronous operation completes. They allow you to control the order of execution when dealing 
// with tasks that don’t complete immediately, like HTTP requests, file reads, or setTimeout calls.

function task1(callback){ //callback ek function hai which contains task 2 and other subsequent tasks
    setTimeout(() => {
        console.log("HELLO")
        callback(); //used to signal that task 1 is now complete
    }, 1000);
}


function task2(callback){
    setTimeout(() => {
        console.log("Adi")
        callback();
    }, 500);
}

task1(()=> {
    task2(() =>{
         console.log('Done')
    })
})




// Callback hell refers to a situation in asynchronous programming where multiple nested callbacks lead to deeply 
// indented code, making it hard to read, maintain, and debug. This "pyramid of doom" occurs when each callback 
// depends on the completion of the previous one, leading to a structure where callbacks nest into one another 
// in layers.

