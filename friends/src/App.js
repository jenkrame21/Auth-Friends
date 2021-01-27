import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Local imports
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {

  // Logout Functional
  const logout = () => {
    // Removes token
    localStorage.removeItem('token');
    // Redirects to login page
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout} to="/logout">Logout</Link>
          </li>
          <li>
            {
              (localStorage.getItem("token") && <Link to="/protected">Protected Page</Link>)
            }
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
