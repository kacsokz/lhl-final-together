import 'components/User/styles.scss';
import React, { useEffect } from 'react';
import useVisualMode        from 'hooks/useVisualMode';
import Profile              from 'components/User/Profile';
import HostEventsList       from 'components/User/HostEventList';
import Form                 from 'components/Event/Form';
import HostShow             from 'components/User/HostShow';
import Confirm              from 'components/Common/Confirm';
import Status               from 'components/Common/Status';
import Error                from 'components/Common/Error';

const PROFILE               = 'PROFILE';
const HOSTEVENTLIST         = 'HOSTEVENTLIST';
const HOSTSHOW              = 'HOSTSHOW';
const EDIT                  = 'EDIT';
const CONFIRM               = 'CONFIRM';
const SAVING                = 'SAVING';
const DELETING              = 'DELETING';
const ERROR_SAVE            = 'ERROR_SAVE';
const ERROR_DELETE          = 'ERROR_DELETE';

export default function UserView(props) {

  const { mode, transition, back } = useVisualMode(PROFILE);

  useEffect(() => {
    if (props.user && mode === PROFILE) {
      transition(PROFILE);
    }
  }, [props.events, props.user, transition, mode]);

  function viewEvent() {
    console.log('viewEvent')
    // transition(STATUS)
  }
  function createUserEvent() {
    console.log('createUserEvent')
    // transition(STATUS)
  }

  function deleteUserEvent() {
    console.log('deleteUserEvent')
    // transition(STATUS)
  }

  const confirm = () => transition(CONFIRM);

  const edit = () => transition(EDIT);

  // Placeholder for Save Function
  const save = () => console.log(save);

  return (
    <section>
      {/* Renders a Users Profile */}
      {/* A User can Edit their Email & Tag Line */}
      {mode === PROFILE && (
        <Profile
          id={props.user[0].id}
          first_name={props.user[0].first_name}
          last_name={props.user[0].last_name}
          email={props.user[0].email}
          avatar={props.user[0].avatar}
          tag_line={props.user[0].tag_line}
          onSave={save}
        />
      )}

      {/* Renders a Users Event List */}
      {/* A User can Create a New Event */}
      {/* A User can Click on an Event to view its' Show Page */}
      {mode === HOSTEVENTLIST && (
        <HostEventsList
          events={props.events}
          avatar={props.user[0].avatar}
          onCreate={() => createUserEvent()}
          onEdit={edit}
          onDelete={confirm}
          viewEvent={() => viewEvent()}
        />
      )}

      {/* Renders Show Page for a Users Event */}
      {/* Allows a User to Edit or Delete Their Event */}
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
          onDelete={confirm}
          onEdit={edit}
        />
      )}

      {/* Renders Form to Edit a Users Event */}
      {/* Allows a User to Save or Delete Their Event */}
      {mode === EDIT && (
        <Form
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
          onConfirm={deleteUserEvent}
          onCancel={back}
        />
      )}

      {/* Renders Status Pages for Saving & Deleting */}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting..." />}

      {/* Renders Error Pages for Saving & Deleting */}
      {mode === ERROR_SAVE && (
        <Error
          message={"Could not save tagline."}
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