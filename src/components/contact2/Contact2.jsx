import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import './Contact2.scss';

export default function Contact2() {
    const form = useRef(null);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_p3omqqb', form.current, 'jVJurwLnr5tzcjBYg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src='./assests/4957160_4957160.jpg' />
            </div>
            <div className="right">
                <div className="title">
                    <h2>CONTACT ME</h2>
                </div>
                <div className="contact-form">
                    <div className="contact-form-leftside">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" className='message' />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="contact-form-rightside">
                        <div className="contact-address">
                            <h2>Contact</h2>
                            <h4>bajwajasons@gmail.com</h4>
                        </div>
                        <div className="base">
                            <h3>Based In</h3>
                            <h4>Atlanta, GA</h4>
                        </div>
                        <div className="other-contact">
                            {/* <a className='linkedin-link' href="www.linkedin.com/in/jason-bajwa"> */}
                            <a className='linkedin-link' href="https://www.linkedin.com/in/jason-bajwa">
                                <img src="./assests/LI-In-Bug.png" alt='LINKEDIN' />

                            </a>

                            <a className='github-link' href="https://github.com/JasonBajwa">
                                <img src="./assests/github-mark.png" alt='github' className='git-logo' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
