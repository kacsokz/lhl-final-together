import React from "react";
import "components/User/styles.scss";

export default function EventListItem(props) {
  // console.log(props.id)
  
  return (
    <article style={{ cursor: 'pointer' }} className="user__card--list-item" onClick={() => props.hostEventShow(props.id)}>
      <h4 className="user__card--list-item-name text--header">{props.name}</h4>
      <h4 className="user__card--list-item-date text--body">
        {props.date} from {props.start_time} to {props.end_time}
      </h4>
      <h4 className="user__card--list-item-attendees text--body">{props.attendees} people are going</h4>
    </article>
  );
}
