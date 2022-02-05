import * as api from "./apiService";

//Crud operation

//Read all todos
export const readTodos = async () => {
    try {
        const { data } = await api.readTodos()
        return data;
    } catch (error) {
        console.log(error)
    }
};
//Create todo
export const createTodos = async (todo) => {
    try {
        const { data } = await api.createTodos(todo)
        return data;
    } catch (error) {
        console.log(error)
    }
};
//Update todo
export const updateTodo = async (id, todo) => {
    try {
        const { data } = await api.updateTodo(id, todo)
        return data;
    } catch (error) {
        console.log(error)
    }
};
//Delete todo
export const deleteTodo = async (id) => {
    try {
        await api.deleteTodo(id)
    } catch (error) {
        console.log(error)
    }
};

