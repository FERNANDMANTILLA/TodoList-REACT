import React from 'react'
import { TodoItem } from './TodoItem'


export const TodoList = ({todos,onDeleteTodo,onToggleToDo}) => {


  return (
    <>
    <ul className="p-3 list-group d-grid gap-3">
    {todos.map((todo)=> {
      return <TodoItem key={todo.id} todo ={todo} onDeleteTodo={onDeleteTodo} onToggleToDo={onToggleToDo} />} )}
    </ul>
    </>
  )
}
