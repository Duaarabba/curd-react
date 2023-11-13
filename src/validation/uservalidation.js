export const validationUserData = (values)=>{
    let errors ={};

    if (values.name.trim()==""){
        errors.name='username is required'
    }
    else if(values.name.trim().length< 3){
        errors.name='your name must be at least 3 character';
    }
    if (values.email.trim()==""){
        errors.email='email is required'
    }
    else if(values.email.trim().length< 9){
        errors.email='your email must be at least 9 character';
    }
    if (values.password.trim()==""){
        errors.password='password is required'
    }
    else if(values.password.trim().length< 3){
        errors.password='your password must be at least 3 character';
    }

    return errors;

}