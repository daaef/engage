import React, { Component } from 'react';
import Wed from "../../assets/img/wed.jpg"
import Wedding from "../../assets/img/wedding.jpg"
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {NavLink} from "react-router-dom";
import {createEvent} from "../../store/actions/createEvent";
import {EventMainCard} from "../common/EventMainCard";

class Events extends Component {
  
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
    console.log(this.props.events.events[0])
    return (
      <>
        <main className="cd-main-content">
        <div className="title__and__button">
          <p>Events</p>
          <div className="right">
            <NavLink to="/dashboard/addevent" className="btn dropIcon">Add Event</NavLink>
          </div>
        </div>
        <div className="events uk-grid uk-child-width-1-3@m uk-grid-collapse">
          {this.props.events.events.map((event, index) => {
            return <EventMainCard key={index} event={event}/>
          })}
        </div>
      </main>
      </>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  events: state.events,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  createEvent: () => dispatch(createEvent)
});
export default connect(mapStateToProps, mapDispatchToProps)(Events);
