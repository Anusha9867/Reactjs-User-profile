import React, { useState} from 'react';
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [navigate , setNavigate ] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        if(content.message !== 'success'){
            setMessage(content.message);
            return
        }
        
        setNavigate(true);
        props.setName(content.message);
        
    }

    if (navigate ) {
        return <Navigate  to="/"/>;
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please Log in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            {message ? message : ''}
        </form>
       
    );
};

export default Login;
