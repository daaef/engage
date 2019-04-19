import React, { useState, useEffect } from 'react';
import {CSSTransition} from "react-transition-group";
import {Load} from "./Load";
import isEmpty from "../../validation/is-empty";
import {NavLink} from "react-router-dom";

export const EventSummaryCard = (props)=> {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!isEmpty(props.event)) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);
  const {event} = props;
  console.log(props);
  return (
  <>
    <CSSTransition
      in={loading}
      timeout={450}
      classNames="vanish"
      unmountOnExit
    >
      <Load/>
    </CSSTransition>
    { !loading &&
    <NavLink to={`/dashboard/eventdetails/${event._id}`} className="event--card">
      <img src={event.event_image} alt="" />
      <div className="text">
        <p>{event.event_name}</p>
      </div>
    </NavLink>
    }
  </>
  )
};