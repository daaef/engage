import React from 'react';
import {MiniLogo} from "../svgs/MiniLogo";
import {EventsIcon} from "../svgs/EventsIcon";
import {SummaryIcon} from "../svgs/SummaryIcon";
import {GuestsIcon} from "../svgs/GuestsIcon";
import {DesignIcon} from "../svgs/DesignIcon";
import {UsersIcon} from "../svgs/UsersIcon";
import {VenuesIcon} from "../svgs/VenuesIcon";

export default () => {
  return (
    <aside className="sidenav">
      <div className="little1">
        <a href="#0">
          <MiniLogo/>
        </a>
      </div>
      <ul>
        <li className="active">
          <a href="index.html">
            <EventsIcon/>
            <p>Events</p>
          </a>
        </li>
        <li>
          <a href="summary.html">
            <SummaryIcon/>
            <p>Summary</p>
          </a>
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
};
