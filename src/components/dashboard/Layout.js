import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../../store/index";
import Events from "../layout/Events";
import Summary from "../layout/Summary";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";

class Dashboard extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path={`${this.props.match.path}`} component={Events} />
          <Route exact path={`${this.props.match.path}/summary`} component={Summary} />
          <SideNav/>
        </Router>
      </Provider>
    );
  }
}

export default Dashboard