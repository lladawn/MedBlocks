import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios' ;


function Register(props) {

    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Frontend" ,{ name: name, number: number, email: email, pass: pass });

        axios.post("http://localhost/register" , { name: name, number: number, email: email, pass: pass }).then((res) =>{
        //   console.log(res);

        if(res.data === "Email already Exists.")
        {
            alert("Email Already in USE!! Try another One.")
            setemail("");
            setpass("");
        }
        else{
            alert(res.data) ;
            props.history.push('/login');  
        }
        })


    }

    return (
        <div className="main">
            <form className="main" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input onChange={(e) => setname(e.target.value)} type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Contact Number</label>
                    <input onChange={(e) => setnumber(e.target.value)} type="number" className="form-control" id="number" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input onChange={(e) => setpass(e.target.value)} value={pass} type="password" className="form-control" id="pass" />
                </div>

                <div>
                    <button type="submit" className="btn btn-success">Register Now</button>
                    <NavLink to="/"><button className="btn btn-danger">Home</button></NavLink>
                </div>

            </form>
        </div>
    );
}

export default Register;
