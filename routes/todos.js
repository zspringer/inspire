// You should put your todo schema should go here
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

//Schema
var todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    currentPage: {type: Number, required: true, default: 0}
})

var Todos = mongoose.model('Todo', todoSchema)

router.get('/', function(req, res, next) {
    Todos.find({})
    .then((todos)=>{
      res.send(todos)
    })
    .catch(next)
})

router.post('/', function(req, res, next) {
    Todos.create(req.body)
    .then((todo)=>{
        res.send(todo)
    })
    .catch(next)
})

router.get('/:todoId', function(req, res, next){
  let todoId = req.params.todoId
  Todos.findById(todoId)
  .then(todo =>{
    if(todo){
    res.send(todo)
    }else{
      next({message: 'Cannot find that todo item'})
    }
  })
  .catch(next)
})

router.delete('/:todoId', (req, res, next) => {
  var todoId = req.params.todoId
  Todos.findByIdAndRemove(todoId)
  .then(todo =>{
    res.send({message: 'Successfully deleted.'})
  })
  .catch(next)
})

router.put('/:todoId', (req, res, next) =>{
  var todoId = req.params.todoId
  var updatedTodoObj = req.body
  Todos.findByIdAndUpdate(todoId, updatedTodoObj)
  .then(todo => {
    res.send({message: 'Successfully Updated Todo List'})
  })
  .catch(next)
})


router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next){
  if (req.xhr){
    res.json({success: false, error: err})
  }else{
    res.json({success: false, error: err.message})
  }
}

module.exports = router
