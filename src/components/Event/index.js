import 'components/Event/styles.scss';
import React          from 'react';
import useVisualMode  from 'hooks/useVisualMode';
import List           from 'components/Common/EventList';
import Show           from 'components/Event/Show';

const LIST            = 'LIST';
const SHOW            = 'SHOW';

export default function Event(props) {

  const { mode, transition } = useVisualMode(LIST);

  // Placeholder Functions BELOW
      function viewEvent() {
        // responsible for onClick transition to the
        // selected events show page
        transition(SHOW)
        console.log('viewEvent')
      };
      const join = join => {
        // the join function will update the attendees count
        // without refreshing the page
        // the plus button should toggle with a minus button
        console.log(join);
      };
  // Placeholder Functions ABOVE

  return (
    <section className="event">

      {/* Renders a List of Local Events */}
      {/* A User can Click on an Event to view its' Show Page */}
      {mode === LIST && (
        <List
          events={props.events}
          viewEvent={() => viewEvent()}        
        />
      )}

      {/* Renders Show Page for a Selected Event */}
      {/* If a User is LoggedIn, they can Join the Event */}
      {/* If a User is LoggedOut, clicking the Join button will redirect to LogIn */}
      {mode === SHOW && (
        <Show
          events={props.events}
          onJoin={join}
        />
      )}
    </section>
  )
};
