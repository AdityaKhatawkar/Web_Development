// Makes it easier to fetch info from a browser and use the data
//fetch(url,{request method which is optional parameter})
//It is a promise
//By default its a get method

fetch('https://dummyjson.com/products/add',{
    method: 'POST', //Add new product
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        description : 'Iphone 19',
        price: '1000',
        rating: '9/10'
    })
})
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

