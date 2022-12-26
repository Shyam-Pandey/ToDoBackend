const express = require("express")
const {home,createTodo,getTodos,getTodo,updateTodoTitle,deleteTodo,createTask} = require("../Controllers/toDoController")
const router = express.Router()

router.get("/",home)
router.post("/createTodo",createTodo)
router.get("/getTodos",getTodos) 
router.get("/getTodo/:id",getTodo)
router.put("/updateTodoTitle/:id",updateTodoTitle)
router.delete("/deleteTodo/:id",deleteTodo)

router.post('/createTask/:id',createTask);


module.exports = router;