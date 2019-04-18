import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {NavLink} from "react-router-dom";
import {createEvent} from "../../store/actions/createEvent";
import {EventMainCard} from "../common/EventMainCard";
import {getEvents} from "../../store/actions/getEvents";
import store from "../../store";
import {deleteEvent} from "../../store/actions/deleteEvent";
import isEmpty from "../../validation/is-empty";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentWillMount() {
    this.props.startAction();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = '/';
    }
  }
  
  componentDidMount() {
    let that = this;
    store.dispatch(getEvents());
    console.log("ran get events");
    setTimeout(()=>{
      if (that.props.events){
        that.setState({
          loading: false
        })
      }
    }, 500);
    setTimeout(
      this.props.stopAction
      , 500);
  }
  removeEvent = (id) => {
    store.dispatch(deleteEvent(id));
  };
  render() {
    console.log(this.props);
    return (
      <>
        <main className="cd-main-content">
        <div className="title__and__button">
          <p>Events</p>
          <div className="right">
            <NavLink to="/dashboard/addevent" className="btn dropIcon">Add Event</NavLink>
          </div>
        </div>
          {!isEmpty(this.props.events.events)  &&
          <div className="events uk-grid uk-child-width-1-3@m uk-grid-small">
      
              {this.props.events.events.map((event, index) => {
                return <div className="uk-margin-top" key={index}><EventMainCard deleteEvent={this.removeEvent}
                                                                                 event={event}/></div>
              })}
            </div>
          }
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
  createEvent: () => dispatch(createEvent),
  getEvents: () => dispatch(getEvents),
  deleteEvent: () => dispatch(deleteEvent),
});
export default connect(mapStateToProps, mapDispatchToProps)(Events);
