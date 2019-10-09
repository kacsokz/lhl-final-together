import React              from 'react';
import Button             from 'components/Common/Button';
import HostEventListItem  from 'components/User/HostEventListItem';

export default function HostEventList(props) {

  const userEvents = props.events.map(event => (
    <HostEventListItem
      key={event.event_id}
      id={event.event_id}
      name={event.event_name}
      date={event.event_date}
      start_time={event.event_start_time}
      end_time={event.event_end_time}
      attendees={event.attendees_count}
      hostEventShow={props.hostEventShow} 
    />
  ));

  return (
    <div className="user__card user__card--list">
      <h1 className="user__card--header text--header">{props.message}</h1>
      <section>
        {userEvents}
      </section>
      <section className="user__card--create-event">
        <Button brand onClick={props.onCreate}>
          Create Event
        </Button>
      </section>
    </div>
  );
}
