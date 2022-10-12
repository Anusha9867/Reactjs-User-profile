import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Password from "./pages/Password";
import Delete from "./pages/Delete";

function App() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });

                const content = await response.json();

                setName(content.name);
                setId(content.id);
                //const Email = content.email;
                setEmail(content.email);
                setMessage(content.message);
            }
        )();
    });


    return (
        <div className="App">
            <BrowserRouter>
            
                <Nav name={name} setName={setName} />
               
                <main className="form-signin">
                <Routes>
                    <Route path="/" exact element={ <Home name={name} message={message}/>}/>
                    <Route path="/login" element={ <Login setName={setName}/>}/>
                    <Route path="/edit" element={ <Edit id={id} name={name} setName={setName} email={email} />}/>        
                    <Route path="/password" element={ <Password id={id}/>}/>
                    <Route path="/delete" element={ <Delete id={id}/>}/>
                    <Route path="/register" element={<Register />}/>
                    </Routes>
                </main>
                
            </BrowserRouter>
        </div>
    );
}

export default App;
