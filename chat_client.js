var socket = require('socket.io-client')('http://midlajc.me:8080');
//3.134.83.89
const repl = require('repl')
const chalk = require('chalk');
let username = null

socket.on('disconnect', () => {
    socket.emit('disconnect')
})

socket.on('connect', () => {
    console.log(chalk.green('Real Time Terminal Chatting App\n'))
    username = process.argv[2]
})

socket.on('message', (data) => {
    console.log(chalk.blue(data.username + ': ' + data.message.split('\n')[0]));
})

repl.start({
    prompt: '',
    eval: (message) => {
        socket.send({ message, username })
    }
})