import React from 'react';
import Profile from 'components/User/profile';
import EventsList from 'components/User/eventsList';
import UserView from 'components/User/index';

export default {
  title: 'User',
};

let events = [
  { id: "1", name: "EventName1", start_time: "15:00", end_time: "16:40", happyHourName: 'something1' },
  { id: "2", name: "EventName2", start_time: "15:00", end_time: "16:40", happyHourName: 'something2' },
  { id: "3", name: "EventName3", start_time: "15:00", end_time: "16:40", happyHourName: 'something3' },
  { id: "3", name: "EventName3", start_time: "15:00", end_time: "16:40", happyHourName: 'something4' },
  { id: "3", name: "EventName3", start_time: "15:00", end_time: "16:40", happyHourName: 'something5' }
]

let user = [
  { id: "1", first_name: "firstName1", last_name: "lastName2", email: "email@email.email", avatar: 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/02/02/2017-09-05t123641z_2074388227_rc1f50c4add0_rtrmadp_3_filmfestival-venice.jpg?itok=oNSajv26&timestamp=1517521109', tag_line: 'this is tagline' }
];

export const profile = () =>
  <Profile user={user}></Profile>;

export const event = () =>
  <EventsList
    events={events}
    user={user}>
  </EventsList>;

export const user_view = () =>
  <UserView
    user={user}
    events={events}>
  </UserView>;