import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Local imports
import Login from './components/Login';
// import Friends from './components/Friends';
// import PrivateRoute from './components/PrivateRoute';
// import { axiosWithAuth } from './utils/axiosWithAuth';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <img src="/imgaes/clipart4184997.png" alt="Friends Logo"/>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* <PrivateRoute exact path="/protected" component={Friends} /> */}
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
