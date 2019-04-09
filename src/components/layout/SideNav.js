import React, {Component} from 'react';
import {MiniLogo} from "../svgs/MiniLogo";
import {EventsIcon} from "../svgs/EventsIcon";
import {SummaryIcon} from "../svgs/SummaryIcon";
import {GuestsIcon} from "../svgs/GuestsIcon";
import {DesignIcon} from "../svgs/DesignIcon";
import {UsersIcon} from "../svgs/UsersIcon";
import {VenuesIcon} from "../svgs/VenuesIcon";
import {NavLink} from "react-router-dom";

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  
  componentDidMount() {
    document.querySelector('select--parent').parentElement.classList.toggle('active')
    }
  
  render() {
    return (
      <aside className="sidenav">
        <div className="little1">
          <a href="#0">
            <MiniLogo/>
          </a>
        </div>
        <ul>
          <li>
            <NavLink to="/dashboard" exact={true} activeClassName="select--parent">
              <EventsIcon/>
              <p>Events</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/summary" exact={true} activeClassName="select--parent">
              <SummaryIcon/>
              <p>Summary</p>
            </NavLink>
          </li>
          <li>
            <a href="#0">
              <GuestsIcon/>
              <p>Guests</p>
            </a>
          </li>
          <li>
            <a href="#0">
              <DesignIcon/>
              <p>Design</p>
            </a>
          </li>
          <li>
            <a href="#0">
              <UsersIcon/>
              <p>Users</p>
            </a>
          </li>
          <li>
            <a href="#0">
              <VenuesIcon/>
              <p>Venues</p>
            </a>
          </li>
        </ul>
      </aside>
    );
}
}
