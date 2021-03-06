import React from "react";

export default function EventListItem(props) {

  return (
    <article className="event__card--list-item" style={{ cursor: 'pointer' }}
      id={props.id}
      onClick={() => props.fromList(props.id)}
    >
      <h5 className="event__card--list-item-name text--body">
        {props.event_name}
      </h5>
      <h6 className="event__card--list-item-date text--header">
        {props.date} from {props.start_time} to {props.end_time}
      </h6>
      <h5 className="event__card--list-item-bar text--body">
        @ {props.bar_name}
      </h5>
    </article>
  );
};