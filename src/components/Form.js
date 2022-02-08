import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupFormSuccess from "./SignupFormSuccess";
import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import Login from "./Login";



const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);


  const toggleFormSubmitted =  ()=>{
    setFormIsSubmitted(true);
  }
  const submitForm =() =>{
    setFormIsSubmitted(true);
  };
  return (
  <BrowserRouter>
  <div>
    {!formIsSubmitted ? 
    (<SignupForm submitForm={submitForm} func = {()=>{toggleFormSubmitted()}}/>) : 
    (<SignupFormSuccess />
    )}
     {/* <Switch> */}
    
    <Route  exact path ="/login" component={Login}/>
    {/* </Switch> */}

    </div>
    </BrowserRouter>
  );    
};
export default Form;
