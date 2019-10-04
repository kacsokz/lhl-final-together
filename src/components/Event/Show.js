import React from "react";

import UserAvatar from '../Common/Avatar';

export default function Show(props) {
  return (
    <main className="event__card event__card--show">

      <h1 className="event__card--header text--header">HOST</h1>

      <section className="event__card--show-body-host">
        <UserAvatar />
        <h1 className="event__card--show-body-host-name text--body">{props.user_name}</h1>
        <h3 className="event__card--show-body-host-tag text--body">{props.tag_line}</h3>
      </section>

      <h1 className="event__card--header text--header">EVENT</h1>

      <section className="event__card--show-body-event">
        <h2 className="event__card--show-body-event-header text--header">WHAT ?</h2>
        <h3 className="event__card--show-body-event-body text--body">{props.event_name}</h3>
        <h2 className="event__card--show-body-event-header text--header">WHEN ?</h2>
        <h3 className="event__card--show-body-event-body text--body">{props.date} from {props.start_time} to {props.end_time}</h3>
        <h2 className="event__card--show-body-event-header text--header">WHERE ?</h2>
        <h3 className="event__card--show-body-event-body text--body">{props.bar_name}</h3>
      </section>

      <h1 className="event__card--header text--header">JOIN {props.attendees} OTHERS</h1>
      <section className="event__card--show-footer">
        <img
          src="images/add.png"
          alt="Join"
          onClick={props.onJoin}
        />
      </section>

    </main>
  );
};