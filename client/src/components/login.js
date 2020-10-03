import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";



function Login(props) {

    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ email: email, pass: pass });

        axios.post("http://localhost/login" , { email: email, pass: pass }).then((res) =>{
          
         console.log(res);

          if(res.data === "Email Not Found.")
          {
              alert("Email is Not registered. Please register Yourself!!")
              props.history.push('/register');
          }
          else if(res.data === "Password Incorrect!!")
          {
            alert("Password is Incorrect..")
            setpass(""); 
          }
          else{
            props.history.push('/welcome');
          }
        })

    }


    return (
        <div className="main">
            <form className="main" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input onChange={(e) => setpass(e.target.value)} value={pass} type="password" className="form-control" id="pass" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <NavLink to="/register"><button className="btn btn-success">Register New</button></NavLink>
                    <NavLink to="/"><button className="btn btn-danger">Home</button></NavLink>
                </div>
            </form>
        </div>
    );
}

export default Login;
