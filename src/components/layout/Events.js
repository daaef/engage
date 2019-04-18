import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {NavLink} from "react-router-dom";
import {createEvent} from "../../store/actions/createEvent";
import {EventMainCard} from "../common/EventMainCard";
import {getEvents} from "../../store/actions/getEvents";
import store from "../../store";
import {Load} from "../common/Load";
import {CSSTransition} from "react-transition-group";

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
  
  render() {
    return (
      <>
        <main className="cd-main-content">
        <div className="title__and__button">
          <p>Events</p>
          <div className="right">
            <NavLink to="/dashboard/addevent" className="btn dropIcon">Add Event</NavLink>
          </div>
        </div>
        <div className="events uk-grid uk-child-width-1-3@m uk-grid-small">
            <CSSTransition
              in={this.state.loading}
              timeout={450}
              classNames="vanish"
              unmountOnExit
            >
              <Load/>
            </CSSTransition>
            
          {this.props.events.events.map((event, index) => {
            return <div className="uk-margin-top" key={index}><EventMainCard  event={event}/></div>
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
  createEvent: () => dispatch(createEvent),
  getEvents: () => dispatch(getEvents)
});
export default connect(mapStateToProps, mapDispatchToProps)(Events);
