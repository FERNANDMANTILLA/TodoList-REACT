import React from 'react'
import { Page } from '../Pages/Page'
import { Routes, Route } from 'react-router-dom'
import { useTodo } from "../../Hooks/useTodo";
export const Router = () => {

  const {todos,handleNewTodo,handleDeleteTodo,handleToggleToDo,allTrue,allFalse} = useTodo()

  return (
    <>
            <Routes>
             <Route path="TodoList-REACT/" element={<Page type='TODO LIST' todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleToDo={handleToggleToDo} handleNewTodo={handleNewTodo}  />} />
             <Route path="/TodoList-REACT/pendings" element={<Page type='PENDING TODO LIST' todos={allFalse} handleDeleteTodo={handleDeleteTodo} handleToggleToDo={handleToggleToDo} handleNewTodo={handleNewTodo}  />} />
             <Route path="/TodoList-REACT/completed" element={<Page type='COMPLETED TODO LIST' todos={allTrue} handleDeleteTodo={handleDeleteTodo} handleToggleToDo={handleToggleToDo} handleNewTodo={handleNewTodo}  />} />
             
            </Routes>
    </>
  )
}
