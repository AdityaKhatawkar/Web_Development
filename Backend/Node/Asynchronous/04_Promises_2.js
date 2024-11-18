const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) //generate random num between 0 and 9
    setTimeout(()=>{
        if(randomNumber < 4){
            resolve('Well done! you guessed right!')
        }
        else{
            reject('Oops! Wrong guess.')
        }
    },2000)
})

// console.log(promise) // Initial status wil be pending then it will be resolved or rejected

// When the promise is created, the setTimeout function is set to execute after a 2-second delay.
// During this delay, the promise remains in the pending state, as it has neither resolved nor rejected yet.

//We will need to consume the promise to actually execute the code inside of the promise

//Few methods to consume a promise
//1st method:

promise.then((value)=>{ //if resolved, value will be value inside the resolve
    console.log(value)
}).catch((error)=>{ //if rejected, error will be value inside the reject
    console.log(error)
})