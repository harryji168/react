import React from 'react';
import { Session } from '../request';
import { BrowserRouter, Route, Switch , Redirect,useHistory  } from 'react-router-dom'


export default function SignInPage(props) {
    let history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props.history);
        props.history.push("/products");
        const formData = new FormData(event.currentTarget);
        Session.create({
            email: formData.get("email"),
            password: formData.get("password")
        }).then(data => {
             console.log(data);
            // {id: 5}  {status: 404}
            if (data.id) {
                props.onSignIn(); 
              //  history.push("/products");                
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password" />
            </div>
            <input type="submit" value="Submit" />
            <button onClick={()=>history.push("/products")} >products</button>
        </form>
    )
}
