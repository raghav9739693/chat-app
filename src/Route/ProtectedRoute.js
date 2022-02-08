import React from 'react';
import { Route,Redirect } from "react-router-dom";
import Auth from '../service/Auth'

const ProtectedRoute = ({path,component:Component,props,render})=>{


    // const user = localStorage.getItem("USERDATA");
    // console.log(user, "<<<<<----BOB--->>>>>>")
    

    return(
        <Route
            path={path}
            {...props}
            render={(props)=>{
                if(!Auth.getCurrentUser()) return <Redirect to="/login" />
                return Component ? <Component {...props} /> : render(props);
            }}
           
        />
    );
}

export default ProtectedRoute;