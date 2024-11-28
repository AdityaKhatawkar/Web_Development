// An event is a named signal that is emitted by an object to indicate that something has happened.
// For example, a "dataReceived" event might signal that new data has arrived, or an "error" event might
// indicate an error condition.

// A listener (or callback function) is a function that is registered to respond to a specific event.

// The EventEmitter class is used to create objects that can emit named events and register listeners to handle these events.

const EventEmitter = require('events')

const customEmitter = new EventEmitter() //create instance of the object

//on - listen for an event
//emit - emit an event


//registering a listener, first argument is the name of the event, second argument is the callback function to be executed
//when the event is emitted
customEmitter.on('response',(name, id)=>{
    console.log(`Data received ${name} - ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`Some other logic`)
})

customEmitter.emit('response','Adii', 67) //we can also pass arguments to the listener