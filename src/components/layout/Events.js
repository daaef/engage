import React, { Component } from 'react';
import Wed from "../../assets/img/wed.jpg"
import Wedding from "../../assets/img/wedding.jpg"
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {NavLink} from "react-router-dom";

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
    return (
      <>
        <main className="cd-main-content">
        <div className="title__and__button">
          <p>Events</p>
          <div className="right">
            <NavLink to="/dashboard/addevent" className="btn dropIcon">Add Event</NavLink>
          </div>
        </div>
        <div className="events">
          <div className="event">
            <div className="features__item">
              <div className="text-component">
                <img src={Wed} height="345" width="486" alt=""/>
                <div className="content">
                  <span>Title</span>
                  <div>Ademola and Ifeoma</div>
                </div>
                <div className="content">
                  <span>Date</span>
                  <div>21st December 1991</div>
                </div>
                <div className="content">
                  <span>Venue</span>
                  <div>Eko Hotels & Suites, Lagos</div>
                </div>
                <div className="content">
                  <span>Guests</span>
                  <div>500 Seats</div>
                </div>
                <a href="#" className="btn-success">View</a>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="features__item">
              <div className="text-component">
                <img src={Wedding} height="345" width="486" alt=""/>
                <div className="content">
                  <span>Title:</span>
                  <div>Omojo and Ibukun</div>
                </div>
                <div className="content">
                  <span>Date:</span>
                  <div>21st December 1991</div>
                </div>
                <div className="content">
                  <span>Venue:</span>
                  <div>Eko Hotels & Suites, Lagos</div>
                </div>
                <div className="content">
                  <span>Guests:</span>
                  <div>500 Seats</div>
                </div>
                <a href="#" className="btn-success">View</a>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Events);
