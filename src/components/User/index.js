import React, { useEffect } from "react";
import EventsList from "components/User/eventsList";
import Profile from "components/User/profile";
import "components/User/styles.scss";
// import useVisualMode from "../../hooks/useVisualMode";
import { create } from "domain";

export default function UserView(props) {
  const PROFILE = "PROFILE";
  const USEREVENTSLIST = "USEREVENTSLIST";


  // const { mode, transition, back } = useVisualMode(
  //   props.profile ? Profile : USEREVENTSLIST
  // );

  // useEffect(() => {
  //     transition(PROFILE);

  // }, [props.events, transition, mode]);


  let mode = USEREVENTSLIST

  function confirmUserTagLine() {
    console.log('confirmUserTagLine')
    // transition(STATUS)
  }

  function deleteUserTagLine() {
    console.log('deleteUserTagLine')
    // transition(CONFIRMING)
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
          onConfirm={() => confirmUserTagLine()}
          onDelete={() => deleteUserTagLine()}
        />
      )}

      {mode === USEREVENTSLIST &&
        <EventsList
          events={props.events}
          avatar={props.user[0].avatar}
          onCreate={() => createUserEvent()}
          onEdit={() => editUserEvent()}
          onDelete={() => deleteUserEvent()}
          viewEvent={() => viewEvent()}
        />
      }
    </div>
  )

}