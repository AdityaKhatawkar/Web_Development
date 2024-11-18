const promise1 = new Promise((resolve, reject) => {
    resolve('well done, promise 1 is resolved.')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('well done, promise 2 is resolved.')
})

const promise3 = new Promise((resolve, reject) => {
    reject('Oops, promise 3 is rejected.')
})


promise1
.then((value)=>{ 
    console.log(value)
    return promise2 //fire promise 2 after 1
})
.then((value)=>{
    console.log(value)
    return promise3 //fire promise 3 after 2
})
.catch((error)=>{
    console.log(error)
})

//Synchronous in Asynchronous

//Nesting promises is similar to callback hell!!!! Hell mat jao heaven jaao