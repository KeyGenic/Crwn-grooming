import React from 'react';
import CustomBtn from '../custom-btn/custom-btn.components';
import InputForm from '../input-form/input-form.components';
import { auth,userProfileDoc } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
       const {displayName,email,password,confirmPassword} = this.state;
       e.preventDefault()
       if( password !== confirmPassword){
           alert('not match')
           return
       }

       try{
           const {user} = await auth.createUserWithEmailAndPassword(email,password)
           await userProfileDoc(user,{displayName})
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })
       }catch(error){
        console.log(error)
    }
    }

    handleChange = (e) => {
        const {value,name} = e.target
        this.setState({[name]:value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className ="sign-up">
                <h2>I don't have a account</h2>
                <span>Sign up with you email and passwords</span>
                <form id ="sign-up-form" onSubmit = {this.handleSubmit}>
                    <InputForm 
                    type = 'text' name  = "displayName" value = {displayName} handleChange = {this.handleChange} label = 'name' required
                    />

                    <InputForm 
                     type = 'email'
                    name  = "email"
                    value = {email}
                    handleChange = {this.handleChange}
                    label = 'email'
                    required
                    />

                    <InputForm
                    type = 'password' 
                    name  = "password"
                    value = {password}
                    handleChange = {this.handleChange}
                    label = 'password'
                    required
                    />

                    <InputForm 
                      type = 'password'
                    name  = "confirmPassword"
                    value = {confirmPassword}
                    handleChange = {this.handleChange}
                    label = 'confirm password'
                    required
                    />
                    <CustomBtn type ="submit" child ="Sign-Up"/>

                </form>
            </div>
        )
    }
}

export default SignUp;