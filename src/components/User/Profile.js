import React      from 'react';
import Email      from './Profile/Email';
import TagLine    from './Profile/Tag';
import UserAvatar from '../Common/Avatar';
import Button     from '../Common/Button';

export default function Profile(props) {

  // Placeholder Functions BELOW
  const save = () => {
    // Saves any changes made to either
    // Email (*required) or Tag Line
  };
  const hostEventList = () => {
    // Transitions to HostEventList
    // TRANSITIONS TAKE PLACE IN THE INDEX.JS
  }
  const userEventList = () => {
    // Transitions to UserEventList
    // TRANSITIONS TAKE PLACE IN THE INDEX.JS
  }
  // Placeholder Functions ABOVE

  return (
    <main className="user__card">

      <h1 className="user__card--header text--header">PROFILE</h1>

      <section className="user__card--profile">
        
        <section className="user__card--profile-avatar">
          <UserAvatar />
        </section>

        <h1 className="user__card--profile-name text--body">{props.name}</h1>
        
        <Email />

        <TagLine />

        <section className="user__card--profile-save">
          <Button blue onClick={save} >
            Update
          </Button>
        </section>

      </section>

      <h1 className="user__card--header text--header">MY EVENTS</h1>

      <section className="user__card--profile-list">
        <Button blue onClick={hostEventList} >
          Hosting
        </Button>
        <Button blue onClick={userEventList} >
          Attending
        </Button>
      </section>

    </main>
  );
};
