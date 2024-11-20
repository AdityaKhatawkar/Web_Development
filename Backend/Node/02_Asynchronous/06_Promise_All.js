// Used when we wanna fire off a bunch of promises, and if one of those promises is rejected, then they all fail.

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved.")
    },2000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise 2 rejected.")
    },1500)
})

Promise.all([promise1, promise2])
.then((data) => console.log(data[0], data[1])) //All promises needs to be fulfilled in order to show it on the console.
.catch((error) => console.log(error)) //If rejected, only the promise that has been rejected will be fired not the fulfilled promises