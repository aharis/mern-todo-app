import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { createTodos, readTodos, deleteTodo, updateTodo } from "../api/index";

const EnterToDo = () => {
    
    const [todo, setTodo] = useState({ title: '', content: '' })
    const [todos, setTodos] = useState(null);
    const [currentId, setCurrentId] = useState(0)
    const [open, setOpen] = useState(false)


    useEffect(() => {
        let currentTodo = currentId !== 0 ? todos.find(todo => todo._id === currentId) : { title: "", content: "" }
        setTodo(currentTodo)
    }, [currentId])
    //Get data from backend
    useEffect(() => {
        const fetchData = async () => {
            const result = await readTodos();
            setTodos(result)
        }
        fetchData()
    }, [todo])
    //clear state
    const remove = () => {
        setCurrentId(0);
        setTodo({ title: '', content: '' })
    }
    // Clear field on escape button
    useEffect(() => {
        const clearField = (e) => {
            if (e.keyCode === 27) {
                remove()
            }
        }
        window.addEventListener('keydown', clearField)
        return () => window.removeEventListener('keydown', clearField)
    }, [])
    // Create and Update todo
    const submitTodos = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
            const result = await createTodos(todo)
            setTodos([...todos, result])
            console.log(result)
            remove()
        } else {
            await updateTodo(currentId, todo)
            remove()
        }

    }

    // Delete todo
    const removeTodo = async (id) => {
        await deleteTodo(id);
        const result = [...todos];
        result.filter(todo => todo._id !== id)
        setTodos(result)
        remove()
    }

    return (

            <div className="row justify-content-center style-entertodo">
                <div className="col-lg-6 col-md-12">
                    <h3 className="pt-3">Enter New ToDo</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" placeholder="Content" value={todo.content} onChange={e => setTodo({ ...todo, content: e.target.value })} />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="btn btn-primary" onClick={submitTodos}>
                                Submit
                            </Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => setOpen(open ? false : true)}>
                                {open ? "Hide All To Do" : "Show All To Do"}
                            </Button>
                        </div>
                    </Form>
                    {open && <div className="text-center">
                        {todos?.map(todo => (

                            <div key={todo._id} onClick={() => setCurrentId(todo._id)} className="row mb-1 pt-3 list-todo border rounded mt-3"  >
                                <div className="col-lg-8 col-md-8 list-todo "><h4>{todo.title}</h4>
                                    <p className="text-start">{todo.content}</p>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <button className="btn btn-danger btn-sm rounded mt-3" type="button" onClick={() => removeTodo(todo._id)}><i className="fa fa-trash"></i></button>
                                </div>

                            </div>
                        ))}
                    </div>
                    }

                </div>
            </div>

    );
}


export default EnterToDo;
