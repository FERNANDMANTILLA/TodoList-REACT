
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { responsiveScript } from "./responsive";
import { useState } from "react";
import { useTodo } from "../Hooks/useTodo";
import { useLayoutEffect } from "react";

export const TodoApp = () => {

    let todosToBeDone;

    const {todos,handleNewTodo,handleDeleteTodo,handleToggleToDo} = useTodo()

    const [windowSize, setWindowSize] = useState(responsiveScript);
    
    window.addEventListener("resize", () => {
        setWindowSize(responsiveScript);
    });

    useLayoutEffect(() => {
    }, [windowSize])


    const lenghtTodos = () => {
        if (todos.length === 0) {
            return null
        }
        else {
            return 1
        }
    }

    const toBeDone = () => {
        todosToBeDone = todos.filter(todo => todo.done === false);
        return todosToBeDone.length;
    }

    return (
        <>
            <h1 className="text-center d-flex  flex-column">TODO LIST ({todos.length}) <small className="text-danger shadow-text">({toBeDone()}) TODOS to be done</small></h1>
            <hr className="bg-white"/>

            <div id="List" className="row justify-content-around d-flex flex-lg-row flex-column">

                <div id="Asd" style={{ alignself: 'none' }} className="align-self-center bg-gray-dark border border-gray rounded-3 p-0 r col-lg-5 col-md-6 col-sm-8 col-10 text-center shadow-box-3">
                    {lenghtTodos() ? <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleToDo={handleToggleToDo} /> : <h2 style={{ margin: '1.8rem' }} className="shadow-text">NO TODOS FOUND</h2>}
                </div>

                <div id="Form" style={{ height: 'fit-content' }} className="border border-gray bg-dark rounded-3 p-3 align-self-center mt-lg-0 mt-5 col-lg-4 col-md-6 col-sm-8 col-10 align-items-start shadow-box-3">
                    <h4 className="text-center text-white border border-gray p-2 bg-gray-dark shadow-box-2">ADD TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo}></TodoAdd>

                </div>

            </div>

        </>
    );
};
