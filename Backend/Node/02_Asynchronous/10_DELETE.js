fetch('https://dummyjson.com/products/1',{
    method: 'DELETE',
    
})
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log(error))