import React, { Component } from 'react';
import Wed from "../../assets/img/wed.jpg"
import Wedding from "../../assets/img/wedding.jpg"
import {connect} from "react-redux";
import { mode_dark,mode_light } from "../../store/actions/toggle_dark";

class Events extends Component {
  
  componentDidMount() {
    console.log(this.props);
  }
  
  render() {
    return (
      <main className="cd-main-content">
        <div className="title__and__button">
          <p>Events</p>
          <div className="right">
            <a href="#0" className="btn dropIcon">Add Event</a>
            <div className="dropdown">
              <ul>
                <li><a href="">yo</a></li>
                <li><a href="">sup</a></li>
                <li><a href="">hey</a></li>
              </ul>
            </div>
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
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  modeDark: () => dispatch(mode_dark),
  modeLight: () => dispatch(mode_light)
});
export default connect(mapStateToProps, mapDispatchToProps)(Events);