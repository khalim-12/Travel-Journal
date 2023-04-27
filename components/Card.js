/** @format */

import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card--main">
      {props.booking === 0 && <div className="card--badge">BOOKED OUT</div>}
      <img src={`images/travel/${props.item.imageUrl}`} alt="notseen" className="card--dimage" />

      <div className="card--details">
        <div className="card--loc">
          <img src="/location.png" alt="noimg" className="card--location" />
          <p>{props.item.location}</p> &nbsp;&nbsp;&nbsp;
          <p>{props.item.street}</p>
        </div>

        <h2>{props.item.title}</h2>
        <h3>
          {props.item.startdate} - <span>{props.item.enddate}</span>
        </h3>

        <p className="para">
          {props.item.description}
        </p>
      </div>
      </div>
     
      </div>
    
  );
}
