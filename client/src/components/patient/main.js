import '../css/main.css';
import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import Record from './records';
import Doctor from './doctors';

function Main() {
  return (
    <>
    <Router>
    <div className="home_page">
    <Navbar/>
    <Switch>
    <Route path = '/' exact component = {Home} />
    <Route path = '/records' component = {Record} />
    <Route path = '/doctors' component = {Doctor} />
    </Switch>
    </div> 
   </Router>
   </>
  );
}

export default Main;
