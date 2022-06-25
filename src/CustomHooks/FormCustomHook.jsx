import React, { useEffect } from "react";
//import { Message } from "../useEffect/Message";
import { useForm } from "../Hooks/useForm";

export const FormCustomHook = () => {
  const {formState,onInputChange,onResetForm,Username,Password,Email} = useForm({
    Username: "",
    Password: "",
    Email: ""
  });



  return (
    <>
      <h1>CUSTOM HOOK FORM</h1>
      <hr />
      <div className="form-group col-3 d-flex align-items-center flex-column">
      <input
        type="text"
        placeholder="Username"
        name="Username"
        className="form-control mb-2"
        value={Username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="Email"
        className="form-control mt-2"
        value={Email}
        onChange={onInputChange}
      />

      <input type="password" className="form-control mt-2" name="Password" value = {Password} onChange={onInputChange} placeholder="Enter your Password"/>
      
      
      <button onClick={onResetForm} className="btn btn-secondary mt-2 widt w-50">RESET</button>
      
      </div>
    </>
  );
};
