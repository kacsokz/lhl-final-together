import React      from "react";
import TagLine    from './Profile/Tag';
import UserAvatar from '../Common/Avatar';

export default function Profile(props) {
  return (
    <main className="user__card">

      <h1 className="user__card--header text--header">PROFILE</h1>

      <section className="user__card--profile">
        <section className="user__card--profile-avatar">
          <UserAvatar />
        </section>

        <h1 className="user__card--profile-name text--body">{props.name}</h1>
        <TagLine />

      </section>

    </main>
  );
};
