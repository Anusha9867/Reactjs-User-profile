import React, {useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import {Navigate } from "react-router-dom";

const Edit = (props) => {

    
   const [useredit,setUseredit] = useState({name:'',email:''});
   const history = useNavigate();
   const id = props.id;


   useEffect( () =>{
    var url = 'http://localhost:8000/api/update/'+id;
    const edituserid = async () => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                name: useredit.name,
                email: useredit.email,
            })

        });

        const res = await response.json();
        setUseredit(await res);
    }

    edituserid();
   },[]);
  
    // if (navigate ) {
    //     return(<div>
    //         {"Updated Successfully"}
    //     </div>);
    // }

    return (
      <React.Fragment>
        <form >
            <h1 className="h3 mb-3 fw-normal">Edit your profile</h1>

            <input className="form-control" placeholder="Name" name="name" required
                 value={useredit.name}
            />

            <input type="email" className="form-control" placeholder="Email address" name="email" required
                 value={useredit.email}
            />
            <button  className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
           
        </form>
        </React.Fragment>
    );
};

export default Edit;
