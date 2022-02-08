

const validation =(values) => {
    let errors = {};

    if(!values.firstname  && !values.lastname){
        errors.firstname="FirstName is required."
        errors.lastname="LastName is requried."
    }
 
    if(!values.email){
        errors.email="Email is requried."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.password){
        errors.password="password is requried."
    }
    else if (values.password.length <5){
        errors.password="Password must be more than five characters."
    }
    return errors;
        
}
export default validation;