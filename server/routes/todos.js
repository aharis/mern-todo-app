import express from 'express';

import { readTodos, createTodos, deleteTodo, updateTodo } from '../controlers/todos.js';

const router = express.Router();

//Routes

router.get("/", readTodos);
router.post("/", createTodos);
router.patch("/:id", updateTodo)
router.delete("/:id", deleteTodo)

export default router;

