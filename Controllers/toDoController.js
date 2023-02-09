const Todo = require('../Models/todo')
var mongoose = require('mongoose');
const { findByIdAndRemove } = require('../Models/todo');

exports.home = (req, res) => {
    res.send("Hello I ma from Backend")
}

exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        console.log(req.body)
        const todo = await Todo.create({ title });
        res.status(201).json({
            success: true,
            message: "Title created",
            todo
        })
    } catch (error) {
        console.log(error)
    }
};

exports.getTodos = async (req, res) => {
    try {
        const getAllTodo = await Todo.find();
        res.status(201).json({
            success: true,
            getAllTodo
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findById(id);
        if (!todo)
            throw new Error("No Todo found");
        res.status(201).json({
            success: true,
            todo
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.updateTodoTitle = async (req, res) => {
    try {
        const updatetodo = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(201).json({
            success: true,
            message: "Updated todo successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id
        const deletetdo = await Todo.findByIdAndRemove(id);
        res.status(201).json({
            success: true,
            message: "Deleted todo successfully",
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

exports.createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const { id } = req.params;

        if (!title)
            throw new Error("Please provide task");
        const todo = await Todo.findByIdAndUpdate(
            id,
            { $push: { tasks: { title } } },
            { new: true }
        );
        res.status(201).json({
            success: true,
            message: "Task Added Successfully",
        });
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
};

exports.getTask = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findById(id);
        if (!todo)
            throw new Error("No Todo found");
        res.status(201).json({
            success: true,
            todo
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


exports.deleteTask = async (req, res) => {
    try {
      const todoId = req.params.todoId;
      const todoTaskId = req.params.id;
  
      // Finding Specific Todo from which we want to delete the task
      const ToDoTask = await Todo.findById(todoId);
  
      // removing that specific task from TODo
      await ToDoTask.tasks.pull({ _id: todoTaskId });
  
      await ToDoTask.save();
  
      res.status(201).json({
        success: true,
        message: "ToDo Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: "Not Deleted",
      });
    }
  };