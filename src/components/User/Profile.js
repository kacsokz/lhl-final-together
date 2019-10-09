import React from 'react';
import Email from './Profile/Email';
import TagLine from './Profile/Tag';
import UserAvatar from '../Common/Avatar';
import Button from '../Common/Button';
import { useApplicationData } from "../../hooks/useApplicationData";

export default function Profile(props) {
  const {
    state
  } = useApplicationData();
  let id = localStorage.getItem("together::user_id");
  
  const [email, setEmail] = React.useState();
  const [tagLine, setTagLine] = React.useState();

  const save = () => {
    props.onUpdateProfile(props.user_id, email, tagLine)
    
  };

  const hostEventList = (id) => {
    props.onHosting(id)
    // Transitions to HostEventList
    // TRANSITIONS TAKE PLACE IN THE INDEX.JS
  }
  const userEventList = (id) => {
    props.onAttending(id)
    // Transitions to UserEventList
    // TRANSITIONS TAKE PLACE IN THE INDEX.JS
  }
  // Placeholder Functions ABOVE


  return (
    <main className="user__card">

      <h1 className="user__card--header text--header">PROFILE</h1>

      <section className="user__card--profile">

        <section className="user__card--profile-avatar">
          <UserAvatar src={props.avatar} />
        </section>

        <h1 className="user__card--profile-name text--body">{props.name}</h1>

        <Email email={props.email} updateEmail={props.onUpdateEmail} setEmail={setEmail} emailFromState={email} />

        <TagLine tag_line={props.tag_line} updateTagLine={props.onUpdateTagLine} setTagLine={setTagLine} tagLineFromState={tagLine} />

        <section className="user__card--profile-update">
          <Button brand onClick={save} >
            Update
          </Button>
        </section>

        {/* <h1 className="user__card--header text--header">MY EVENTS</h1>
        <section className="user__card--profile-list">
          <Button brand onClick={() =>hostEventList(props.user_id)} >
            Hosting
          </Button>
          <Button brand onClick={() => props.onAttending()} >
            Attending
          </Button>
        </section> */}
      </section>

    </main>
  );
};
