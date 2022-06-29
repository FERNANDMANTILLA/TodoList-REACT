import { useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";
import { useEffect } from "react";



export const useTodo = () => {

    const init = () => {
        const todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        const jsonTodos = JSON.stringify(todos);
        localStorage.setItem("todos", jsonTodos);

    }, [todos])

    const handleNewTodo = (todo) => {

        const action = {
            type: "ADD_TODO",
            payload: todo,
        };
        dispatch(action);

    }

    const handleDeleteTodo = (todo) => {

        const action = {
            type: "DELETE_TODO",
            payload: todo,
        };
        dispatch(action);
        
    }

    const handleToggleToDo = (id) => {
        const action = {
            type: "TOGGLE_TODO",
            payload: id,
        };

        dispatch(action);
    }

    const handleTrueTodo = () => {
        const action = {
            type: "TRUE_TODO",
        };

        dispatch(action);
    }

    const allTrue = todoReducer(todos, { type: "TRUE_TODO" });
    const allFalse = todoReducer(todos, { type: "FALSE_TODO" });

    

    return {
        ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleToDo,
        allTrue,
        allFalse,
    }

}
