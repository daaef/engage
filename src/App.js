import React, { Component } from 'react';
import './App.scss';
import './assets/js/main';
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/index";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {logoutUser, setCurrentUser} from "./actions/authActions";
import Dashboard from "./components/dashboard/Layout";


// Check for token
/*if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile
    
    // Redirect to login
    window.location.href = '/';
  }
}*/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </Provider>
  );
  }
}

export default App;
