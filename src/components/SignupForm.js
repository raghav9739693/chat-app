import { object } from "joi";
import React,{useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import Form from "./Form";
import validation from "./validation";
import { Link } from 'react-router-dom';

const SignupForm = ({submitForm,func}) =>{
    const [values,setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        
    });

    const [FormSubmitted,setFormIsSubmitted]= useState(false)


    const [errors, setErrors] = useState({});
    // const [dataIsCorrect,setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit =(event) =>{
    
        event.preventDefault();

        const tempError = validation(values);
        setErrors(tempError);
        console.log(values, "<<<<----VAKUES--->>>>>>")
        localStorage.setItem("userdata", JSON.stringify(values))
        // localStorage.removeItem("userdata",JSON.stringify(values))

        if(Object.keys(tempError).length === 0){
            setFormIsSubmitted(true);
        }
    
        // setDataIsCorrect(true);

        // func();
     
    };

    // useEffect(()=>{

    // },[FormSubmitted])
    // useEffect(() =>{
    //     if(Object.keys(errors).length ===0 && dataIsCorrect){
    //         submitForm(true);

    //     }
    // },[errors]);
// const submitForm=FormSubmitted;
// if(setFormIsSubmitted===true) {
//    <Redirect to ='/signup' />
// }

    if(FormSubmitted === true){
        return <Redirect to="/login"/>
    }

    return (
    <div className ="container">
    <div className="app-wrapper">
        <div>   
        <h2 className="tittle">Create Account</h2>
    </div>
    <form className="form-wrapper">
        <div className="name">
            <label className="label">First Name</label>
            <input className="input" 
            type="text" 
            name="firstname" 
            value={values.firstname}
            onChange={handleChange}
            />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className="name">
            <label className="label">Last Name</label>
            <input className="input" 
            type="text" 
            name="lastname" 
            value={values.lastname}
            onChange={handleChange}
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
            <div className="email">
            <label className="label">Email</label>
            <input className="input" 
            type="email" 
            name="email" 
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
        </div>
            <div className="password">
            <label className="label">Password</label>
            <input className="input" 
            type="password" 
            name="password" 
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
        <button className ="Submit" onClick={handleFormSubmit}>Sign Up</button>
        </div>
        
         
        <button> <a href ="/login" className="Login">Login </a></button>
             
          
            
    </form>
    </div>
    </div>
    );

    
};
export default SignupForm;