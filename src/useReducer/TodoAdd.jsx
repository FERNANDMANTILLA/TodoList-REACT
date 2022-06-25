import React from 'react'
import { useState } from 'react';
import { useForm } from '../Hooks/useForm';

export const TodoAdd = ({handleNewTodo,onToggleToDo}) => {

    
    const{formState,onResetForm,onInputChange} = useForm({
        id: new Date().getTime(),
        description: "",
        done: false,
    });

    

    const onFormSubmit = (e)=>{
        e.preventDefault();
        handleNewTodo(formState);
        onResetForm();
    }
    
    return (
        <form className="form-group border p-3 border-dark bg-dark rounded-3">
            <input
                type="text"
                name="description"
                id="description"
                className="form-control  shadow-text shadow-box-3"
                placeholder=""
                aria-describedby="helpId"
                value={formState.description}
                onChange={onInputChange}
            />
            <button onClick={ onFormSubmit} className="btn btn-secondary mt-4" type="submit">
                ADD
            </button>
        </form>
    )
}
