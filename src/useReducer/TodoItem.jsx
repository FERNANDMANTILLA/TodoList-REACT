import React from 'react'

export const TodoItem = ({todo,onDeleteTodo,onToggleToDo}) => {
  const {id,description,done} = todo;

  const isDone = () => {
    if (done) {
      return true
    }
    else {
      return null
    }
  }

  return (
    <li className="list-group-item d-flex justify-content-between border border-black rounded-2 shadow-box">
    {!isDone() ? <span onClick={() => onToggleToDo(id)} className="fa fa-times fz-4 align-self-center text-danger w-10" ><p className='fz-3 m-0 ff'>to be done</p></span>  :     <span onClick={() => onToggleToDo(id)} className="fa fa-check fz-4 align-self-center text-success w-10" ><p className='fz-3 m-0 ff'>It's Done</p></span> }
    <span className="alig-self-center w-100 d-flex justify-content-center"> <p className="m-0 fz-4 d-flex align-items-center text-white">{description}</p></span>
    <button onClick={() => onDeleteTodo(id)} className="btn btn-danger">Remove</button>
    </li>
  )
}
