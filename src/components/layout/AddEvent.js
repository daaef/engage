import React, { Component } from 'react';
import Wed from "../../assets/img/wed.jpg"
import Wedding from "../../assets/img/wedding.jpg"
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {Loading} from "../common/Loader";
import {EventsIcon} from "../svgs/EventsIcon";
import {GuestsIcon} from "../svgs/GuestsIcon";
import {VenuesIcon} from "../svgs/VenuesIcon";
import {UsersIcon} from "../svgs/UsersIcon";
import {NavLink} from "react-router-dom";
import Util from "../../assets/js/util";

class AddEvent extends Component {
  
  componentWillMount() {
    this.props.startAction();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = '/';
    }
  }
  
  componentDidMount() {
    setTimeout(
      this.props.stopAction
      , 1500);
  }
  
  render() {
    return (
      <>
        <main className="cd-main-content">
        
        </main>
      </>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
