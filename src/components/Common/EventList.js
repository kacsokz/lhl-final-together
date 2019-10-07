import React from 'react';
import EventListItem from 'components/Common/EventListItem';
export default function EventList(props) {


  const events = props.localEvents.map(event => {
    
    return (
      <EventListItem
        key={event.event_id}
        id={event.event_id}
        event_name={event.event_name}
        bar_name={event.bar_name}
        date={event.event_date}
        start_time={event.event_start_time}
        end_time={event.event_end_time}
        attendees={event.attendees_count}
        onClick={props.onClick}
      />
    )
  });

  return (
    <main className="event__card event__card--list">
      <h1 className="event__card--header text--header">{props.message}</h1>
      <section>
        {events}
      </section>
      <h1 className="event__card--header text--header">EVENTS</h1>
    </main>
  );
};
