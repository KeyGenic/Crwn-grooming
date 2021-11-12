import React,{useState} from 'react';
import './contact.styles.scss';
import InputForm from '../../components/input-form/input-form.components';
import CustomBtn from '../../components/custom-btn/custom-btn.components';

export function ContactPage() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message] = useState('')
    return (
        <div className = 'contact-page'>
            <h1>Do you have any questions,suggestions or feedback? we'd love to hear from you!</h1>
            <InputForm
            type = 'text'
            placeholder = 'Name'
            name = {name}
            />
             <InputForm
            type = 'email'
            placeholder = 'Email'
            name = {email}
            />
               <InputForm
            type = 'text'
            placeholder = 'Enter your Message'
            />
            <CustomBtn
            child = 'Submit'
            />
        </div>
    )
}
