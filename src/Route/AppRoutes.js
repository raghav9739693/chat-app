import React from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch,Link} from "react-router-dom"

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

import Home from '../components/Home';
import Login from '../components/Login';
import SignupForm from '../components/SignupForm';
import UserDetails from '../components/UserDetails';
import UploadImages from '../components/UploadImages';
const AppRoute = ()=>{
    return(
    <Router>
    
        <Switch>
            <ProtectedRoute path="/home" component={Home}/>
            {/* <ProtectedRoute path="/welcome" component={Home}/> */}
            <PublicRoute path="/login" component={Login}/>
            <PublicRoute path="/signup" component={SignupForm}/>
            <Redirect exact from="/" to="/home"/>
            <Route exact path="/userdetails" component={UserDetails}/>
            <Route exact path="/uploadimages" component={UploadImages}/>
        </Switch>
    </Router>
    )
}


export default AppRoute;