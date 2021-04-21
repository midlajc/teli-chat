const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 80

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
