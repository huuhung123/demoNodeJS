const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));
// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

//on, emit are methods in class EventEmitter

// <!-- 
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// })

// //Raise an event
// emiiter.emit('messageLogged', { id:1, url: 'http://'})
// -->