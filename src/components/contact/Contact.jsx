import React from 'react'
import './Contact.scss'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useState } from 'react';


export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className='contact' id="contact">
            <div className="left">
                <EmailRoundedIcon />
            </div>

            <div className="right">
                <h2>CONTACT ME</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='message'></textarea>
                    <button type='submit'>SEND</button>
                    {message && <span>MESSAGE SENT!!!!</span>}
                </form>
            </div>
        </div>
    )
}
