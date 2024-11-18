//Built on top of promises to make it easier to work with asynchronous code.
//async function will return a promise, then we can use the await keyword inside that function to wait for promise to resolve.

const preHeatOven = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const preHeatOven = true
            if(preHeatOven){
                resolve("Preheat oven to 180 degrees")
            }
            else{
                reject("Failed task 1")
            }
        }, 1000);
    })
}

const addSugarAndChocoChips = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const addChoco = true
            if(addChoco){
                resolve("Place butter and chocolate chips, stir until melted and smooth")
            }
            else{
                reject("Failed task 2")
            }
        }, 1000);
    })
}

const addFlourCocoaAndSalt = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const addSalt = true
            if(addSalt){
                resolve("Add flour, coco and salt and stir until smooth")
            }
            else{
                reject("Failed task 3")
            }
        }, 1000);
    })
}

const bakeMixture = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const bakeMixture = true
            if(bakeMixture){
                resolve("Bake for 24 minutes for really gooey center")
            }
            else{
                reject("Failed task 4")
            }
        }, 1000);
    })
}


const bakeChocolateBrownies = async() => { //async keyword to make it an async function
    try{
        const task1 = await preHeatOven() //await keyword to complete the promise
        console.log(task1)
    
        const task2 = await addSugarAndChocoChips()
        console.log(task2)
    
        const task3 = await addFlourCocoaAndSalt()
        console.log(task3)
    
        const task4 = await bakeMixture()
        console.log(task4)
    
        console.log("Enjoy the chocolate brownies!")
    }
    catch(error){
        console.log(error)
    }

}

bakeChocolateBrownies()

//await is only valid in async functions