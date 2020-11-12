import React, { Component } from 'react';
import '../css/defaultpage.css';
import Modal from './Modal';
import logo1 from '../img/logo.png';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="navbar-default">
                    <div className="app-logo">
                        <img src={logo1} alt="logo" />
                        <h2>MedBlocks</h2>
                    </div>
                    {/* <div className="logo">
                        <h2>MedBlocks</h2>
                        <h1>MB</h1>
                    </div> */}
                    {/* <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact Us</a>
                    <Modal value="Sign In" /> */}
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li>
                            <Link to="/loggedIn">
                                Profile
                            </Link>
                        </li>
                        
                        <li><Modal value="Sign In" /></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;