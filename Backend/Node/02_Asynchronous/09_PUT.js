fetch('https://dummyjson.com/products/1',{
    method: 'PUT', //Update existing product
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        title : 'Iphone 19',
        description : 'Changed to Iphone 19',
        price: '1000',
        rating: '9/10'
    })
})
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log(error))