const EventEmitter = require('events')
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        //Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;

// <!-- 
// Logger.js

// const EventEmitter = require('events');
// class Logger extends EventEmitter {
//     log(message) {
//         //send an HTTP request
//         console.log(message);
//         //raise an event
//         this.emit('messageLogged', { id:1, url: 'http://' })
//     }
// }
// module.exports = Logger

// App.js

// const Logger = require('./logger')
// const logger = new Logger();
// //Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg)
// })
// logger.log('message')
// -->