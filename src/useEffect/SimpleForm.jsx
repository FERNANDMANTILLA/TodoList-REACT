import React, { useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = React.useState({
        Username: 'Paolo2',
        Email: 'paolomta2705@gmail.com'

    });

    const {Username,Email} = formState;

    const onInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
     // console.log("Inicio");
    },[]);

    useEffect(()=>{
      //console.log("Email Cambiado");
    },[Email]);




  return (
    <>
    <h1>Simple Form</h1>
    <hr />
    <input type="text" placeholder='Username' name='Username' className='form-control' value={Username} onChange={onInputChange}/>
    <input type="email" placeholder='Email' name='Email' className='form-control mt-2' value={Email} onChange={onInputChange}/>
    {
      Username=== 'Paolo2' && <Message/>
    }

    </>
  )
}
