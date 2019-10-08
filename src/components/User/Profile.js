import React, { useEffect } from 'react';
import Email from './Profile/Email';
import TagLine from './Profile/Tag';
import UserAvatar from '../Common/Avatar';
import Button from '../Common/Button';
import { useApplicationData } from "../../hooks/useApplicationData";
import queryString from 'query-string'


export default function Profile(props) {
  const {
    state
  } = useApplicationData();
  
  const [id, setId] = React.useState(state.userInfo.id);

  useEffect(() => {
    if (typeof queryString.parse(window.location.search) === 'number') {
      setId(queryString.parse(window.location.search).uer_id)
    }
  }, []);

  
  const [email, setEmail] = React.useState(state.userInfo.email);
  const [tagLine, setTagLine] = React.useState(state.userInfo.tagLine);
 
// console.log(queryString.parse(window.location.search).user_id)
  // Placeholder Functions BELOW
  // console.log(queryString.parse(window.location.search))
  const save = () => {
    props.onUpdateProfile(queryString.parse(window.location.search).user_id
    , email, tagLine)
  };
  const hostEventList = () => {
    props.onHosting()
    // Transitions to HostEventList
    // TRANSITIONS TAKE PLACE IN THE INDEX.JS
  }
  const userEventList = () => {
    props.onAttending()
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

        <Email email={props.email} updateEmail={props.onUpdateEmail} setEmail={setEmail} />

        <TagLine tag_line={props.tag_line} updateTagLine={props.onUpdateTagLine} setTagLine={setTagLine} />

        <section className="user__card--profile-save">
          <Button blue onClick={save} >
            Update
          </Button>
        </section>

      </section>

      <h1 className="user__card--header text--header">MY EVENTS</h1>

      <section className="user__card--profile-list">
        <Button blue onClick={() =>hostEventList()} >
          Hosting
        </Button>
        <Button blue onClick={() => props.onAttending()} >
          Attending
        </Button>
      </section>

    </main>
  );
};
