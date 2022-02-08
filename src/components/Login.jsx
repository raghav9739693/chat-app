import React, { useState} from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {Redirect} from 'react';
import useAuth from "../useAuth";
import ProtectedRoute from "./ProtectedRoutes";
import { useHistory } from 'react-router-dom';

import Auth from "../service/Auth";

function Login(props) {
  const [customer, setCustomer] = useState({});
  const[Submitted,setSubmitted]= useState(false)
  const [errors, setErrors] = useState({});
  const [isAuth, login, logout] = useAuth(false)
  // const [loggedIn,setLoggedIn] = useState(false);
  const history = useHistory();


const schema = {

	email: Joi.string().email().required(),
	pin: Joi.number().min(1000).max(9999).required(),

};

const validUser = (e)=>{      
  e.preventDefault();
  Auth.Login();
  // setLoggedIn(true);
  window.location.reload();
  console.log(customer, "<<<--CUSTOMER--->>>");

  console.log(customer.email);

  let array = new Array();
  array.push(customer);

  localStorage.setItem("USERDATA", JSON.stringify(array));
  
  let email = customer.email;
  let pasword = customer.pin;

  if(email && pasword) {
    history.push("/home")

  }
  else {
  alert("User detail error")
  }

  }

const validateForm = (event) => {
  event.preventDefault();
  const result = Joi.validate(customer, schema, { abortEarly: false });
  console.log(result);
  const { error } = result;
  if (!error) {
    return null;
  } else {
    const errorData = {};
    for (let item of error.details) {
      const name = item.path[0];
      const message = item.message;
      errorData[name] = message;
    }
    console.log(errors);
    setErrors(errorData);
    return errorData;
	if(Object.keys(errorData).length ===0)
	setSubmitted(true);
  }
};


const handleSave = (event) => {
	event.preventDefault();
  const { name, value } = event.target;
  let errorData = { ...errors };
  const errorMessage = validateProperty(event);
  if (errorMessage) {
    errorData[name] = errorMessage;
  } else {
    delete errorData[name];
  }
  let customerData = { ...customer };
  customerData[name] = value;
  setCustomer(customerData);
  setErrors(errorData);
};

const validateProperty = (event) => {
  const { name, value } = event.target;
  const obj = { [name]: value };
  const subSchema = { [name]: schema[name] };
  const result = Joi.validate(obj, subSchema);
  const { error } = result;
  return error ? error.details[0].message : null;
};
const clearState = () => {
  setCustomer({
    email: "",
    pin: 0,
  });
};

// if(Submitted === true){
// 	return <Redirect to ="/Sucess"/>
// }
// if(loggedIn === true){
//   return <Redirect to="/home"/>
// }



return (
	<div>
	<h3>Login</h3>
	<hr />
	<form className="ui form">
		
		<div className="form-group">
		<label>Email</label>
		<input
			type="email"
			name="email"
			className="form-control"
			value={customer.email}
			onChange={handleSave}
		/>
		</div>
		{errors.email && (
		<div className="alert alert-danger">
			{errors.email}
		</div>
		)}
		<div className="form-group">
		<label>PIN</label>
		<input
			type="number"
			name="pin"
			className="form-control"
			value={customer.pin}
			onChange={handleSave}
		/>
		</div>
		
		
		<div className="btn">
		{/* <button className="btn btn-primary btn-block">  
            
            
            </button> */}

  {isAuth ? (<><div >You are logged in..</div>
          <button  onClick={logout}>Logout</button></>):(<>
          <div >You are logged out..</div><button onClick={validUser}>Login</button></>)}
      </div>

      <button> <a href ="/signup" className="Signup">Go to SignUp page </a></button>
    </form>
    </div>
  );
}

export default Login;
