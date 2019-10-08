import 'components/Event/styles.scss';
import React from 'react';
import useVisualMode from 'hooks/useVisualMode';
import List from 'components/Common/EventList';
import Show from 'components/Event/Show';
import { useApplicationData } from "../../hooks/useApplicationData";
import Button from '../Common/Button';
import Status from '../../components/Common/Status';
const JOINING = 'JOINING';

const LIST = 'LIST';
const SHOW = 'SHOW';

export default function Event(props) {

  const { mode, transition } = useVisualMode(LIST);
  const {
    state,
    getEventById,
    joinEvent,
  } = useApplicationData();

  // Placeholder Functions BELOW
  const viewEvent = (id) => {
    // responsible for onClick transition to the
    // selected events show page
    getEventById(id)
      .then(transition(SHOW))
  };

  const join = (joinData) => {
    transition(JOINING)
    joinEvent(joinData)
      // .then(() => getEventById(event_id))
      .then(transition(LIST))
    // the join function will update the attendees count
    // without refreshing the page
    // the plus button should toggle with a minus button
  };
  // Placeholder Functions ABOVE

  return (

    <section className="event">

      <section className="event__card--nav">
        <Button nav onClick={() => transition(LIST)} >
          Local Events
        </Button>
      </section>

      {/* Renders a List of Local Events */}
      {/* A User can Click on an Event to view its' Show Page */}
      {mode === LIST && (
        <List
          message={'LOCAL'}
          events={props.localEvents}
          fromIndex={viewEvent}
        />
      )}
      {/* Renders Show Page for a Selected Event */}
      {/* If a User is LoggedIn, they can Join the Event */}
      {/* If a User is LoggedOut, clicking the Join button will redirect to LogIn */}
      {mode === SHOW && state.event && (
        <Show
          // key={state.event.event_id}
          // event_id={state.event.event_id}
          // user_name={state.event.host_name}
          // avatar={state.event.host_avatar}
          // tag_line={state.event.event_tag_line}
          // event_name={state.event.event_name}
          // date={state.event.event_date}
          // start_time={state.event.event_start_time}
          // end_time={state.event.event_end_time}
          // bar_name={state.event.bar_name}
          // attendees={state.event.attendees_count}
          onJoin={join}
          event={state.event}
        />
      )}
      {mode === JOINING && <Status message="JOINING..." />}
    </section>
  )
};
