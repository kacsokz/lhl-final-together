import React from 'react';
import Button from 'components/Common/Button';
import UserAvatar from 'components/Common/Avatar';
import EventListItem from 'components/User/eventListItem';
import 'components/User/styles.scss';

export default function HostEventList(props) {

  const eventsList = props.events.map((event) => (
    <EventListItem
      id={event.id}
      name={event.name}
      start_time={event.start_time}
      end_time={event.end_time}
      onEdit={props.onEdit}
      onDelete={props.onDelete}
      viewEvent={props.viewEvent}
    />
  ));

  return (
    <div className="event-container">
      <UserAvatar alt="Avatar" src={props.avatar} />
      <h4 className="my-event">Events</h4>
      <div className="events-list">
        {eventsList}
      </div>
      <span className="create-event">
        <Button confirm onClick={props.onCreate}>
          Create
        </Button>
      </span>
    </div>
  );

}