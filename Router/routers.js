const express = require("express")
const{home,
    createTodo,
    getTodos,
    getTodo,
    updateTodoTitle,
    deleteTodo,
    createTask,
    getTask,
    deleteTask} = require("../Controllers/toDoController")
const router = express.Router()

router.get("/",home)
router.post("/createTodo",createTodo)
router.get("/getTodos",getTodos) 
router.get("/getTodo/:id",getTodo)
router.put("/updateTodoTitle/:id",updateTodoTitle)
router.delete("/deleteTodo/:id",deleteTodo)

router.post('/createTask/:id',createTask);
router.get('/getTask/:id',getTask) 
router.delete("/:todoId/deleteTask/:taskId",deleteTask)

module.exports = router;