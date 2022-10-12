import React, {useRef, useState } from 'react';


const Edit = (props) => {
    const [name, setName] = useState(props?.name);
    const [email, setEmail] = useState(props?.email);
    const [error, setError] = useState();

    const nameRef = useRef();
    const emailRef = useRef();
    
    const [navigate , setNavigate ] = useState(false);
    
    const submit = async (event) => {
        event.preventDefault();
        setName(nameRef.current.value);
        setEmail(emailRef.current.value);
        
        if (name.trim().length === 0 || email.trim().length === 0) {
            setError({
                errorTitle: 'Invalid input',
                errorMessage: 'Please fill out the fields'
            });
          return;
        }

        var url = 'http://localhost:8000/api/update/'+props.id;
        console.log(url);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email,
            })

        });

        const content = await response.json();
        console.log(content)
        
        setNavigate(true);
        props.setName(content.name);
        props.setEmail(content.email);
    }

    const setUserName = (event) => {
        setName(event.target.value);
      };

    const setUserEmail = (event) => {
        setEmail(event.target.value);
      };

    if (navigate ) {
        return(<div>
            {"Updated Successfully"}
        </div>);
    }

    return (
      <div>
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Edit your profile</h1>

            <input className="form-control" placeholder="Name" required
                   onChange={setUserName} ref={nameRef} defaultValue={props?.name}
            />

            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={setUserEmail} ref={emailRef} defaultValue={props?.email}
            />
            <button  className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            {error ? error.errorMessage: ''}
        </form>
        </div>
    );
};

export default Edit;
