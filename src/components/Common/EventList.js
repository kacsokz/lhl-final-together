import React from 'react';
import EventListItem from 'components/Common/EventListItem';

export default function EventList(props) {

  const eventList = [
    {
      id: 1,
      event_name: 'Graduation & Celebration Drinks',
      bar_name: 'The Last Best Brewing Company',
      date: 'Oct. 10, 2019',
      start_time: '20:00',
      end_time: '23:00',
      attendees: 18,
    },
    {
      id: 2,
      event_name: 'Halloween Costume Showdown',
      bar_name: 'Greta Bar',
      date: 'Oct. 31, 2019',
      start_time: '16:00',
      end_time: '17:00',
      attendees: 18,
    },
    {
      id: 3,
      event_name: 'Pixels & Pints 10th Anniversary',
      bar_name: 'Hudsons Canadas Pub',
      date: 'Nov. 7, 2019',
      start_time: '17:00',
      end_time: '21:00',
      attendees: 18,
    },
    {
      id: 4,
      event_name: 'Holiday Party',
      bar_name: 'El Furniture Warehouse',
      date: 'Dec. 7, 2019',
      start_time: '15:00',
      end_time: '16:00',
      attendees: 18,
    }
  ];

  const events = /* props. */eventList.map(event => {
    return (
      <EventListItem
        key={event.id}
        id={event.id}
        event_name={event.event_name}
        bar_name={event.bar_name}
        date={event.date}
        start_time={event.start_time}
        end_time={event.end_time}
        attendees={event.attendees}
        eventShow={props.eventShow}
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
