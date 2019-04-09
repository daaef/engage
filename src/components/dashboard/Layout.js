import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../../store/index";
import Events from "../layout/Events";
import Summary from "../layout/Summary";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {logoutUser, setCurrentUser} from "../../actions/authActions";
import {Switch} from "../common/Switch";


// Check for token
if (localStorage.jwtToken) {
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
}

class Dashboard extends Component {
  render() {
    return (
        <Router>
          <Navbar />
            <Route exact path={`${this.props.match.path}`} component={Events} />
            <Route exact path={`${this.props.match.path}/summary`} component={Summary}/>
          <SideNav/>
        </Router>
    );
  }
}

export default Dashboard