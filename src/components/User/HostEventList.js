import React              from 'react';
import Button             from 'components/Common/Button';
import HostEventListItem  from 'components/User/HostEventListItem';

export default function HostEventList(props) {

  const userEvents = props.events.map(event => (
    <HostEventListItem
      key={event.id}
      name={event.bar_name}
      date={event.date}
      start_time={event.start_time}
      end_time={event.end_time}
      attendees={event.attendees}
    />
  ));

  return (
    <div className="user__card user__card--list">
      <h1 className="user__card--header text--header">{props.message}</h1>
      <section>
        {userEvents}
      </section>
      <section className="user__card--create-event">
        <Button blue onClick={props.onCreate}>
          Create Event
        </Button>
      </section>
    </div>
  );
}
