import React    from 'react';
import ListItem from 'components/Event/ListItem';

export default function List(props) {

  const events = props.events.map(event => {
    return (
      <ListItem
        key={event.id}
        event_name={event.event_name}
        bar_name={event.bar_name}
        date={event.date}
        start_time={event.start_time}
        end_time={event.end_time}
        attendees={event.attendees}
      />
    )
  });

  return (
    <main className="event__card event__card--list">
      <h1 className="event__card--header text--header">LOCAL</h1>
      <section>
        {events}
      </section>
      <h1 className="event__card--header text--header">EVENTS</h1>
    </main>
  );
};
