import 'components/User/styles.scss';
import React, { useEffect } from 'react';
import useVisualMode from 'hooks/useVisualMode';
import Profile from 'components/User/Profile';
import EventList from 'components/User/HostEventList';
import Form from 'components/Common/Form';
import HostShow from 'components/User/HostShow';
import Confirm from 'components/Common/Confirm';
import Status from 'components/Common/Status';
import Error from 'components/Common/Error';
import List from 'components/Common/EventList';
import Show from 'components/Event/Show';
import Button from '../Common/Button';

const PROFILE = 'PROFILE';
const HOSTEVENTLIST = 'HOSTEVENTLIST';
const USEREVENTLIST = 'USEREVENTLIST';
const HOSTSHOW = 'HOSTSHOW';
const JOINSHOW = 'JOINSHOW';
const EDIT = 'EDIT';
const CONFIRM = 'CONFIRM';
const SAVING = 'SAVING';
const CREATING = 'CREATING';
const DELETING = 'DELETING';
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';
const UPDATING = 'UPDATING';
const JOINING = 'JOINING';

export default function User(props) {

  const { mode, transition, back } = useVisualMode(PROFILE);

  useEffect(() => {
    if (props.user && mode === PROFILE) {
      transition(PROFILE);
    }
  }, [props.user, transition, mode]);

  const confirm = () => transition(CONFIRM);

  const edit = () => transition(EDIT);

  const destroy = () => {
    const event = null;
    transition(DELETING, true)
    .then(props.deleteEvent(props.id, event))
    .then(() => transition(PROFILE));
};


const updateProfile = (id, email, tagline) => {
  transition(UPDATING)
    .then(props.updateProfile(id, email, tagline))
    .then(() => transition(PROFILE))
    .catch(error => transition(ERROR_SAVE, true));
  // save update to Profile Email &&/||Tag
}

const joinShow = () => {
  transition(JOINSHOW)
  // Transition to Event/Show.js
}
const hostEventShow = (event_id) => {
  // props.getEventById(event_id)
  transition(HOSTSHOW)
  // Transition to User/HostShow.js
}
const hostEventList = () => {
  transition(HOSTEVENTLIST)
  // List of Events Hosted By the User
  // SEE User/Profile.js
};
const userEventList = () => {
  transition(USEREVENTLIST)
  // List of Events the User is Attending
  // SEE User/Profile.js
};
const createEvent = () => {
  transition(CREATING)
};

const saveNewEvent = (eventData) => {
  transition(SAVING)
    .then(props.saveNewEvent(eventData))
    .then(transition(HOSTEVENTLIST))
  // Saves a new event to the db
}

const editEvent = (eventData) => {
  transition(SAVING)
    .then(props.updateEvent(eventData))
    .then(transition(HOSTEVENTLIST))
  // Update an event to the db
}

const joinEvent = (joinData) => {
  transition(JOINING)
    .then(props.joinEvent(joinData))
    .then(transition(USEREVENTLIST))
  // Join an event to the db
}
// Placeholder Functions ABOVE



return (
  <section className="user">
    <h2 className="user__card--header">
    <Button blue onClick={() => transition(PROFILE)} >
            Profile
          </Button>
          <Button blue onClick={() => transition(HOSTEVENTLIST)} >
            Hosting
          </Button>
          <Button blue onClick={() => transition(USEREVENTLIST)} >
            Attending
          </Button></h2>

    {/* Renders a User Profile */}
    {/* A User can Update their Email & Tag Line */}
    {/* A User can view events they are hosting & attending */}
    {mode === PROFILE && (
      <Profile
        avatar={props.avatar}
        name={props.name}
        email={props.email}
        tag_line={props.tag_line}
        onUpdateProfile={updateProfile}
        onHosting={hostEventList}
        onAttending={userEventList}
      />
    )}

    {/* Renders a List of the Users' Event */}
    {/* A User can Create a New Event */}
    {/* A User can Click on their Event to view its' Host Show Page */}
    {mode === HOSTEVENTLIST && (
      <EventList
        message={props.hostingMessage}
        events={props.hostingEvents}
        onCreate={() => createEvent()}
        hostEventShow={hostEventShow}
      />
    )}

    {/* Renders a List of the Users' Event */}
    {/* A User can Click on an Event to view its' Show Page */}
    {mode === USEREVENTLIST && (
      <List
        message={props.attendingMessage}
        events={props.attendingEvents}
        onClick={joinShow}
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

    {mode === JOINSHOW && (
      <Show
        user_name="Kat Connolly"
        bar_name="The Last Best Brewing Company"
        event_name="Graduation & Celebration Drinks"
        date="Oct. 10, 2019"
        start_time="20:00"
        end_time="23:00"
        tag_line="Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22-JUL-2019."
        attendees="18"
        onJoin={joinEvent}
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
        onSave={editEvent}
        onCancel={back}
      />
    )}

    {mode === CREATING && (
      <Form
        onSave={saveNewEvent}
        onCancel={back}
      />
    )}

    {/* Renders a Confirm/Delete Page for a Users Event */}
    {/* A User can Confirm or Cancel a Pending Delete */}
    {mode === CONFIRM && (
      <Confirm
        message={"Delete the Event?"}
        onCancel={() => back()}
        onConfirm={destroy}
      />
    )}

    {/* Renders Status Pages for Saving, Deleting, Updating & Joining */}
    {mode === SAVING && <Status message="Saving..." />}
    {mode === DELETING && <Status message="Deleting..." />}
    {mode === UPDATING && <Status message="Updating..." />}
    {mode === JOINING && <Status message="JOINING..." />}

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