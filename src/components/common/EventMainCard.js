import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {Load} from "./Load";
import isEmpty from "../../validation/is-empty";
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const EventMainCard = (props)=> {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!isEmpty(props.event)) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);
  const {event} = props;
  let current = new Date(`${event.event_date}`);
  let date = `${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
  const DelEvent = (e) =>{
    props.deleteEvent(e.target.dataset.key)
  };
  console.log(props);
  return (
  <div className="event">
    <CSSTransition
      in={loading}
      timeout={450}
      classNames="vanish"
      unmountOnExit
    >
      <Load/>
    </CSSTransition>
    { !loading &&
      <div className="features__item">
        <div className="text-component">
          <img src={event.event_image} height="345" width="486" alt=""/>
          <div className="content">
            <span>Title</span>
            <div>{event.event_name}</div>
          </div>
          <div className="content">
            <span>Date</span>
            <div>{date}</div>
          </div>
          <div className="content">
            <span>Venue</span>
            <div>{event.event_venue}</div>
          </div>
          <div className="content">
            <span>Guests</span>
            <div>{event.guest_num}</div>
          </div>
          <div className="uk-flex uk-flex-between">
          <NavLink to={`/dashboard/eventdetails/${event._id}`} className="btn-success">View</NavLink>
          <button data-key={event._id} className="btn-danger" onClick={DelEvent}>Delete</button>
          </div>
        </div>
      </div>
    }
  </div>
  )
};