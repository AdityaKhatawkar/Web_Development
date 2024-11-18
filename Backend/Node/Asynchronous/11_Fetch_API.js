const getAllProducts = async() => {
    try{
        const response = await fetch('https://dummyjson.com/products/')
        const json = await response.json()
        console.log(json)
    }
    catch(error){
        console.log(error)
    }

}

getAllProducts()