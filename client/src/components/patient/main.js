import '../../css/main.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import Record from './records';
import Doctor from './doctors';
import DoctorDetails from '../doctor/doctorDetails';
import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';
import MyPatients from '../doctor/myPatients';

class Main extends Component {
  state = {
    IsDoctor: false,
    address: ''
  }

  isDoctor = async () => {
    const accounts = await web3.eth.getAccounts();
    const isDoctor = await medBlocks.methods.getUserIsDoctor(accounts[0]).call();
    this.setState({IsDoctor: isDoctor, address: accounts[0]}); 
  }

  componentDidMount() {
    this.isDoctor();
  }

  render(){
    return (
      <Router>
      <div className="home_page">
        <Navbar IsDoctor = {this.state.IsDoctor}/>
        <Switch>
        <Route path = '/loggedIn' exact component = { () => <Home address={this.state.address} /> } />
        <Route path = '/loggedIn/records' component = {Record} />
        <Route path = '/loggedIn/doctors' exact component = {Doctor} />
        <Route path = "/loggedIn/doctors/:id/doctorDetails" component={DoctorDetails} />
        <Route path = "/loggedIn/my_patients" exact component={MyPatients} />
        </Switch>
      </div> 
     </Router>
    );
  }
}

export default Main;
