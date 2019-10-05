import React from "react";
import "components/User/styles.scss";

export default function EventListItem(props) {
  
  return (
    <article className="user__card--list-item">
      <h4 className="text--header">{props.name}</h4>
      <h4 className="text--body">
        {props.date} from {props.start_time} to {props.end_time}
      </h4>
      <h4 className="text--body">{props.attendees} people are going</h4>
    </article>
  );
}