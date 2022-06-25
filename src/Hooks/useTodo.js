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

    return {
        ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleToDo,
    }

}
