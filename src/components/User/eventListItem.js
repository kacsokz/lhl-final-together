import React from "react";
import "components/User/styles.scss";

export default function EventListItem(props) {
  
  return (
    <div className="event-details">
      <div onClick={props.viewEvent}>{props.id}: {props.name}</div>
      <div>{props.start_time} - {props.end_time}</div>
      <span><img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
          </span>
      </div>
  );
}