import React from "react";

import Avatar from '@material-ui/core/Avatar';

export default function Show(props) {
  return (
    <main className="event__card event__card--show">

      <h1 className="event__card--header text--header">HOST</h1>
      <section className="event__card--body">
        <Avatar
          className="user__card--avatar"
          alt="Avatar"
          src="https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/02/02/2017-09-05t123641z_2074388227_rc1f50c4add0_rtrmadp_3_filmfestival-venice.jpg?itok=oNSajv26&timestamp=1517521109"
        />
        <h1 className="text--body">{props.user_id}</h1>
        <h3 className="text--body">{props.tag_line}</h3>
      </section>

      <h1 className="event__card--header text--header">EVENT</h1>
      <section className="event__card--body">
        <h3 className="text--header">WHEN ?</h3>
        <h2 className="text--body">{props.date} from {props.start_time} to {props.end_time}</h2>
        <h3 className="text--header">WHERE ?</h3>
        <h2 className="text--body">{props.bar_name}</h2>
      </section>

      <h1 className="event__card--header text--header">JOIN {props.attendees} OTHERS</h1>
        <section className="event__actions--join">
          <img
            className="event__actions--join-button"
            src="images/add.png"
            alt="Join"
            onClick={props.onJoin}
          />
        </section>

    </main>
  );
};