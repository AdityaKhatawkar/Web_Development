// What is a promise?

// A promise is an assurance or guarantee that something will happen in the future. A person can promise another person a 
// specific outcome or result. A promise is an object that holds the future value of an async operation.

// Example: Requesting some data from a server, the promise, promises us to get that data which we can
// use in future.


//promise states: 
//pending: promise is not ready, waiting for something like in async.
//fulfilled: the promise has been resolved.
//rejected: some error has occured in the program.

const promise = new Promise((resolve, reject) => {
    //code we want to execute
    const allWentWell = true;
    if(allWentWell){
        resolve('All things went well')
    }
    else{
        reject('Oops something went wrong')
    }
})
console.log(promise)

// The Promise constructor takes a function with two parameters, resolve and reject. These are functions that allow
// you to indicate whether the operation succeeded (resolve) or failed (reject).
