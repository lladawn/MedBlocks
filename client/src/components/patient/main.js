import '../../css/main.css';
import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import Record from './records';
import Doctor from './doctors';

function Main() {
  return (
    <Router>
    <div className="home_page">
      <Navbar/>
      <Switch>
      <Route path = '/loggedIn' exact component = {Home} />
      <Route path = '/loggedIn/records' component = {Record} />
      <Route path = '/loggedIn/doctors' component = {Doctor} />
      </Switch>
    </div> 
   </Router>
  );
}

export default Main;
