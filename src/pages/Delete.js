import React , { useState  } from 'react';
import { Link } from "react-router-dom";


const Delete = (props) => {
    
    const [navigate , setNavigate ] = useState(false);
    const submit = async () => {


        var url = 'http://localhost:8000/api/delete/'+props.id;
        console.log(url);
        await fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });

        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        setNavigate(true);

    }
    if (navigate ) {
        return(<div>
            {"Deleted Successfully"}
        </div>);
    }
   
    return (
        <div>
             <h1 className="h3 mb-3 fw-normal">Are you sure want to delete?</h1>
        <button onClick={submit}>Yes</button>  <Link to="/"><button >Cancel</button></Link>
    </div>
    );
};

export default Delete;
