import React from 'react';
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const EventMainCard = (props)=> {
  const {event} = props;
  let current = new Date(`${event.event_date}`);
  let date = `${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
  return (
  <div className="event">
    <div className="features__item">
      <div className="text-component">
        <img src={event.event_pic} height="345" width="486" alt=""/>
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
        <a href="#" className="btn-success">View</a>
      </div>
    </div>
  </div>
  )
}