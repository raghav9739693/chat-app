import React from 'react';
import { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import Auth from '../service/Auth';

const PublicRoute = ({props,path,component:Component,render})=>{
    
    return(
        <Route
            path={path}
            render={(props)=>{
                if(!Auth.getCurrentUser()) return Component ? <Component {...props}/>:render(props);
                return <Redirect to="/"/>

            }}
            
        />
    );
    
}

export default PublicRoute;