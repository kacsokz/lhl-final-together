import React, { useEffect } from "react";
import HostEventsList from "components/User/HostEventList";
import Profile from "components/User/Profile";
import Status from "components/Common/Status";
import Confirm from "components/Common/Confirm";
import Error from "components/Common/Error";
import "components/User/styles.scss";
import useVisualMode from "hooks/useVisualMode";

export default function UserView(props) {
  const PROFILE = "PROFILE";
  const HOSTEVENTLIST = "HOSTEVENTLIST";
  const ERROR = "ERROR";
  const CONFIRMING = "CONFIRMING";
  const EDITING = "EDITING";
  const ERROR_DELETE = "ERROR_DELETE"
  const DELETING = "DELETING";
  const ERROR_SAVE = "ERROR_SAVE"
  const SAVING = "SAVING";


  const { mode, transition, back } = useVisualMode(PROFILE);

  useEffect(() => {
    if (props.user && mode === PROFILE) {
      transition(PROFILE);
    }
  }, [props.events, props.user, transition, mode]);


  function saveTagLine(tag_line) {

    if (!tag_line) {
      transition(ERROR_SAVE, true)
    }

    props.createUserTagLine(props.id, tag_line)
    transition(SAVING)
      .then(() => transition(PROFILE))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function saveEmail(email) {

    if (!email) {
      transition(ERROR_SAVE, true)
    }

    props.updateEmail(props.id, email)
    transition(SAVING)
      .then(() => transition(PROFILE))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleting() {
    transition(CONFIRMING)
  }

  function deleteUserTagLine() {
    const tag_line = null;
    transition(DELETING, true)
    props.deleteTagLine(props.id, tag_line)
      .then(() => transition(PROFILE))
      .catch(error => transition(ERROR_DELETE, true));
  }

  function createUserEvent() {
    console.log('createUserEvent')
    // transition(STATUS)
  }

  function editUserEvent() {
    console.log('editUserEvent')
    // transition(STATUS)
  }

  function deleteUserEvent() {
    console.log('deleteUserEvent')
    // transition(STATUS)
  }

  function viewEvent() {
    console.log('viewEvent')
    // transition(STATUS)
  }

  // function deleteUserEvent() {
  //   const userEvent = null;
  //   transition(DELETING, true)
  //   props.deleteEvent(props.id, userEvent)
  //     .then(() => transition(PROFILE))
  //     .catch(error => transition(ERROR_DELETE, true));
  // }

  return (
    <div>
      {mode === PROFILE && (
        <Profile
          id={props.user[0].id}
          first_name={props.user[0].first_name}
          last_name={props.user[0].last_name}
          email={props.user[0].email}
          avatar={props.user[0].avatar}
          tag_line={props.user[0].tag_line}
          onConfirm={() => saveTagLine()}
          onDelete={() => deleting()}
          onSaveEmail={() => saveEmail()}
        />
      )}

      {mode === HOSTEVENTLIST &&
        <HostEventsList
          events={props.events}
          avatar={props.user[0].avatar}
          onCreate={() => createUserEvent()}
          onEdit={() => editUserEvent()}
          onDelete={() => deleteUserEvent()}
          viewEvent={() => viewEvent()}
        />
      }

      {mode === CONFIRMING && (
        <Confirm
          message={"Delete the Tag Line?"}
          tag_line={props.user[0].tag_line}
          onConfirm={deleteUserTagLine}
          onCancel={() => back()} />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message={"Could not delete event."}
          onClose={() => back()} />
      )}

      {mode === ERROR_SAVE && (
        <Error
          message={"Could not save tagline."}
          onClose={() => back()} />
      )}

      {mode === DELETING && (
        <Status
          message="DELETING"
        />
      )}
      {mode === SAVING && (
        <Status
          message="SAVING"
        />
      )}
    </div>
  )

}