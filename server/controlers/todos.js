import mongoose from 'mongoose';
import Todo from '../models/todo.js';

//Crud operation

//Read todos
export const readTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch (error) {
        res.status(401).json(error)
    }
};
//Create todo
export const createTodos = async (req, res) => {
    const todo = new Todo(req.body)
    try {
        await todo.save();
        res.status(201).json(todo)
    } catch (error) {
        res.status(409).json(error)
    }
};

//Update todo
export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId(id)) {
        return res.status(404).send(`The id${id} is not valid!`)
    }
    const todo = { title, content, _id: id }
    await Todo.findByIdAndUpdate(id, todo, { new: true })
    res.json(todo)
};

//Delete todo
export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(`The id ${id} is not valid!`)
    }
    await Todo.findByIdAndDelete(id)
    res.json("Todo deleted sucessfuly")
};