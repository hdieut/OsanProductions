import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const[email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    
    return (
        <div className="contactForm">
            <input type="text" placeholder="Your Name" value={name} onChange={event => setName(event.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={event => setEmail(event.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={event => setMessage(event => setMessage(event.target.value))}></textarea>
            <button onClick={submit}>Send Message</button>
            <span className= {emailSent ? 'visible': null}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default Contact;