import React from 'react';
import './CSS/Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.email}`);
        const templateId = 'template_l7s9qxd';
        const serviceID = 'my_gmail';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
    }


    return (
        <div className="ContactForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="name"
                    name="name" 
                    ref={
                        register({ 
                            required: "Please enter your name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
                /><br />
                {errors.name && errors.name.message}<br />

                <input
                    placeholder="email"
                    name="email"
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br />

                <textarea 
                    placeholder="comment"
                    name="comment" 
                    ref={
                        register({
                            required: true
                        })
                    } 
                /><br />
                {errors.comment && "oops, you forgot your message!"}<br />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Contact;