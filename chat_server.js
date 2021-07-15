const http = require('http').createServer();
const io = require('socket.io')(http);
var express = require('express')
let exp = express()
var cros = require('cors')

const port = 3000

exp.use(cros())

http.listen(port, () => console.log(`server listening on port: ${port}`))

io.on('connection', (socket) => {
    console.log('connected')
    socket.on('message', (evt) => {
        console.log(evt)
        socket.broadcast.emit('message', evt)
    })
})

io.on('disconnect', (evt) => {
    console.log('disconnected')
})