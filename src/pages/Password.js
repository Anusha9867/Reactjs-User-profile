import React, {useState} from 'react';


const Password = (props) => {
    
    const [password, setPassword] = useState('');
    const [navigate , setNavigate ] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        var url = 'http://localhost:8000/api/update/'+props.id;
        console.log(url);
        await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                password
            })

        });

        //console.log(content)
        setNavigate(true);
    }
  
    if (navigate ) {
        return(<div>
             {"Password Changed Successfully"}
        </div>);
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Enter your New password</h1>

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button  className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Password;
