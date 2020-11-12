import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Default from './components/default';
import Main from './components/patient/main';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Default} />
          <Route path="/loggedIn" exact component={Main} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
