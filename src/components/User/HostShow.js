import React      from "react";
import Button     from "components/Common/Button";
import UserAvatar from '../Common/Avatar';

export default function HostShow(props) {
  console.log(props)
  return (
    <main className="user__card user__card--show" >

      <h1 className="user__card--header text--header">EVENT</h1>

      <section className="user__card--show-body-host">
        <UserAvatar src={props.event.host_avatar}/>
        <h3 className="user__card--show-body-host-tag text--body">{props.event.event_tag_line}</h3>
      </section>

      <section className="user__card--show-body-event">
        <h2 className="user__card--show-body-event-header text--header">WHAT ?</h2>
        <h3 className="user__card--show-body-event-body text--body">{props.event.event_name}</h3>
        <h2 className="user__card--show-body-event-header text--header">WHEN ?</h2>
        <h3 className="user__card--show-body-event-body text--body">{props.event.event_date} from {props.event.event_start_time} to {props.event_end_time}</h3>
        <h2 className="user__card--show-body-event-header text--header">WHERE ?</h2>
        <h3 className="user__card--show-body-event-body text--body">{props.event.bar_name}</h3>
      </section>

      <h1 className="user__card--header text--header">ADMIN</h1>
      <section className="user__card--show-footer">
        <Button
          blue
          // onClick={props.onEdit}
          onClick={() => props.onEdit()}
        >
          Edit
        </Button>
        <Button
          red
          // onClick={props.onConfirm}
          onClick={() => props.onDelete()}
        >
          Delete
        </Button>
      </section>

    </main>
  );
};