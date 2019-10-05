import 'components/User/styles.scss';
import React, { useEffect } from 'react';
import useVisualMode        from 'hooks/useVisualMode';
import Profile              from 'components/User/Profile';
import EventList            from 'components/User/HostEventList';
import Form                 from 'components/Common/Form';
import HostShow             from 'components/User/HostShow';
import Confirm              from 'components/Common/Confirm';
import Status               from 'components/Common/Status';
import Error                from 'components/Common/Error';

const PROFILE               = 'PROFILE';
const HOSTEVENTLIST         = 'HOSTEVENTLIST';
const USEREVENTLIST         = 'USEREVENTLIST';
const HOSTSHOW              = 'HOSTSHOW';
const EDIT                  = 'EDIT';
const CONFIRM               = 'CONFIRM';
const SAVING                = 'SAVING';
const DELETING              = 'DELETING';
const ERROR_SAVE            = 'ERROR_SAVE';
const ERROR_DELETE          = 'ERROR_DELETE';

export default function User(props) {

  const { mode, transition, back } = useVisualMode(PROFILE);

  useEffect(() => {
    if (props.user && mode === PROFILE) {
      transition(PROFILE);
    }
  }, [props.events, props.user, transition, mode]);

  const confirm = () => transition(CONFIRM);

  const edit = () => transition(EDIT);

  const destroy = () => {
    const event = null;
    transition(DELETING, true);
    props.deleteEvent(props.id, event)
      .then(() => transition(PROFILE));
  };

  // Placeholder Functions BELOW
  const save = () => {
    // save update to Profile Email &&/||Tag
  };
  const eventShow = () => {
    // Transition to Event/Show.js
  }
  const hostEventShow = () => {
    // Transition to User/HostShow.js
  }
  const hostEventList = () => {
    // List of Events Hosted By the User
    // SEE User/Profile.js
  };
  const userEventList = () => {
    // List of Events the User is Attending
    // SEE User/Profile.js
  };
  const createEvent = () => {
    // Saves a new event to the db
  }
  // Placeholder Functions ABOVE

  return (
    <section className="user">

      {/* Renders a User Profile */}
      {/* A User can Update their Email & Tag Line */}
      {/* A User can view events they are hosting & attending */}
      {mode === PROFILE && (
        <Profile
          avatar={props.user[0].avatar}
          first_name={props.user[0].first_name}
          last_name={props.user[0].last_name}
          email={props.user[0].email}
          tag_line={props.user[0].tag_line}
          onUpdate={save}
          onHosting={hostEventList}
          onAttending={userEventList}
        />
      )}

      {/* Renders a List of the Users' Event */}
      {/* A User can Create a New Event */}
      {/* A User can Click on their Event to view its' Host Show Page */}
      {mode === HOSTEVENTLIST && (
        <EventList
          events={props.events}
          onCreate={() => createEvent()}
          hostEventShow={() => hostEventShow()}
        />
      )}

      {/* Renders a List of the Users' Event */}
      {/* A User can Click on an Event to view its' Show Page */}
      {mode === USEREVENTLIST && (
        <EventList
          events={props.events}
          eventShow={() => eventShow()}
        />
      )}

      {/* Renders Show Page for a Users' Hosted Event */}
      {/* Allows a User to Edit or Delete their Event */}
      {mode === HOSTSHOW && (
        <HostShow
          user_name={props.user_name}
          bar_name={props.bar_name}
          event_name={props.event_name}
          date={props.date}
          start_time={props.start_time}
          end_time={props.end_time}
          tag_line={props.tag_line}
          attendees={props.attendees}
          onEdit={edit}
          onDelete={confirm}
        />
      )}

      {/* Renders the Form to Edit a Users' Specified Event */}
      {/* Allows a User to Save or Delete Their Event */}
      {mode === EDIT && (
        <Form
          bar_id={props.bars.id}
          name={props.events.name}
          tag={props.events.tag_line}
          date={props.events.date}
          start_time={props.events.start_time}
          end_time={props.events.end_time}
          onSave={save}
          onCancel={back}
        />
      )}

      {/* Renders a Confirm/Delete Page for a Users Event */}
      {/* A User can Confirm or Cancel a Pending Delete */}
      {mode === CONFIRM && (
        <Confirm
          message={"Delete the Tag Line?"}
          tag_line={props.user[0].tag_line}
          onCancel={back}
          onConfirm={destroy}
        />
      )}

      {/* Renders Status Pages for Saving & Deleting */}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting..." />}

      {/* Renders Error Pages for Saving & Deleting */}
      {mode === ERROR_SAVE && (
        <Error
          message={"Could not save event."}
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message={"Could not delete event."}
          onClose={back}
        />
      )}
    </section>
  )
}