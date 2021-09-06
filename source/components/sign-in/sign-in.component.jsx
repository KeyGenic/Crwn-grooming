import React from 'react';
import '../sign-in/sign-in-styles.scss';
import InputForm from '../input-form/input-form.components';
import {CustomBtn} from '../custom-btn/custom-btn.components';
import signInWithGoogle from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password: ''
        }
    }

     handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '',password:''})
    }

    handleChange = (e) => {
        const {value,name} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className ="sign-in">
                <h2>I Already have an Account</h2>
                <span>Sign In with your Email and Password</span>

                <form id ="sign-in-form" onSubmit = {this.handleSubmit}>
                    <InputForm type="email" name = 'email' value ={this.state.email} required handleChange = {this.handleChange} label = "email" />
                    <InputForm type="password" name = 'password' value ={this.state.password} required handleChange ={this.handleChange} label = 'password' />
                    <CustomBtn type="submit" value ="submit form" child ="Sign-in" />
                    <CustomBtn onClick = {signInWithGoogle} child ="Sign-in with google" />
                </form>
            </div>
        )
    }
}

export default SignIn;