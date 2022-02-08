import React,{useState} from "react";
import Form from "./components/Form";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route,Switch, Redirect} from "react-router-dom"
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import LoginValidation from "./components/LoginValidation";
// import Success from "./components/Sucess";
import Main from "./components/Main";
import TempMain from "./components/TempLogin";
// import ProtectedRoute from "./components/ProtectedRoutes";

import Auth from "./service/Auth";

import AppNavigator from "./Route/AppNavigator";
import AuthNavigator from "./Route/AuthNavigator";
import { useHistory } from 'react-router-dom';
const App = () => {
 
  const history = useHistory();


 
  const [user, setUser] = useState(Auth.getCurrentUser());
  
  if(user === true){
    return <AppNavigator/>
  }
    return <AuthNavigator/>
  

};
export default App;