//require your dependencies
var express = require('express')
var bodyParser = require('body-parser')
var expressSanitizer = require('express-sanitizer');
var dbConnect = require('./config/db/mlab-config')

var server = express()
var port = 3000

//tell your server what it needs to use - MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(expressSanitizer());


//register your todos routes as api/routes
var todosRouter = require('./routes/todos')

server.use('/api/todos', todosRouter);



//start your server listening....

server.listen(port, () => {
    
        console.log(`
        Starting up node,
        Available on:
        http://127.0.0.1:${port}
        Hit CTRL-C to stop the server`)
    
    })