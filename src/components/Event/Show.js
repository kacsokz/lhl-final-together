import React from "react";
import UserAvatar from '../Common/Avatar';

export default function Show(props) {

  const user_id = localStorage.getItem("together::user_id");
  return (
    <main className="event__card event__card--show">

      <h1 className="event__card--header-host text--header">HOST</h1>

      <section className="event__card--show-body-host">
        <UserAvatar src={props.event.host_avatar} />
        <h1 className="event__card--show-body-host-name text--body">{props.event.host_name}</h1>
        <h3 className="event__card--show-body-host-tag text--body">{props.event.tag_line}</h3>
      </section>

      <h1 className="event__card--header text--header">EVENT</h1>

      <section className="event__card--show-body-event">
        <h2 className="event__card--show-body-event-header text--header">WHAT ?</h2>
        <h3 className="event__card--show-body-event-body text--body">{props.event.event_name}</h3>
        <h2 className="event__card--show-body-event-header text--header">WHEN ?</h2>
        <h3 className="event__card--show-body-event-body text--body">{props.event.event_date} from {props.event.event_start_time} to {props.event.event_end_time}</h3>
        <h2 className="event__card--show-body-event-header text--header">WHERE ?</h2>
        <h3 className="event__card--show-body-event-body text--body">{props.event.bar_name}</h3>
      </section>

      {user_id && (
        <h1 className="event__card--header text--header">JOIN {props.event.attendees_count} OTHERS</h1>
      )}

      <section className="event__card--show-footer">
        {user_id && (<img
          style={{ cursor: 'pointer' }}
          className="event__card--show-footer-join"
          src="images/add-64.png"
          alt="Join"
          onClick={() => props.onJoin(user_id, props.event.event_id, props.event.bar_id)}
        />
        )}
      </section>

    </main>
  );
};