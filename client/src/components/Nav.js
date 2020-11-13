import React, { Component } from 'react';
import '../css/defaultpage.css';
import Modal from './Modal';
import logo1 from '../img/logo.png';
import { Link } from 'react-router-dom';
import web3 from '../ethereum/web3';
import medBlocks from '../ethereum/medBlocks';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            IsPatient: false,
        }
    }

    showSignIn = async () => {
        const accounts = await web3.eth.getAccounts();
        const info = await medBlocks.methods.getPatientInfo2(accounts[0]).call();
        this.setState({IsPatient: info[0]})
    }

    componentWillMount(){
        this.showSignIn();
    }

    renderProfile(){
        if(this.state.IsPatient){
            return(
                <li>
                    <Link to="/loggedIn">
                        Profile
                    </Link>
                </li>
            );
        }
        else{
            return (
                <li><Modal value="Sign In" /></li>
            );
        }
    }

    render(){
        return(
            <div>
                <nav className="navbar-default">
                    <div className="app-logo">
                        <img src={logo1} alt="logo" />
                        <h2>MedBlocks</h2>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        {this.renderProfile()}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;