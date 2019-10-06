import React from 'react';
import Profile from 'components/User/Profile';
import HostEventList from 'components/User/HostEventList';
import EventList from 'components/Common/EventList'
import HostShow from 'components/User/HostShow';
import { action } from '@storybook/addon-actions';
import User from 'components/User/index';

export default {
  title: 'User Stories',
};



const hostingEvents = [
  {
    id: 1,
    event_name: 'Graduation & Celebration Drinks',
    bar_name: 'The Last Best Brewing Company',
    date: 'Oct. 10, 2019',
    start_time: '20:00',
    end_time: '23:00',
    attendees: 18,
  },
  {
    id: 2,
    event_name: 'Halloween Costume Showdown',
    bar_name: 'Greta Bar',
    date: 'Oct. 31, 2019',
    start_time: '16:00',
    end_time: '17:00',
    attendees: 18,
  },
  {
    id: 3,
    event_name: 'Pixels & Pints 10th Anniversary',
    bar_name: 'Hudsons Canadas Pub',
    date: 'Nov. 7, 2019',
    start_time: '17:00',
    end_time: '21:00',
    attendees: 18,
  },
  {
    id: 4,
    event_name: 'Holiday Party',
    bar_name: 'El Furniture Warehouse',
    date: 'Dec. 7, 2019',
    start_time: '15:00',
    end_time: '16:00',
    attendees: 18,
  },
  {
    id: 5,
    event_name: 'KVs NY PBs',
    bar_name: 'Craft Beer Market',
    date: 'Jan. 1, 2019',
    start_time: '16:00',
    end_time: '17:00',
    attendees: 18,
  }
];

const attendingEvents = [
  {
    id: 1,
    event_name: 'Graduation & Celebration Drinks',
    bar_name: 'The Last Best Brewing Company',
    date: 'Oct. 10, 2019',
    start_time: '20:00',
    end_time: '23:00',
    attendees: 18,
  },
  {
    id: 2,
    event_name: 'Halloween Costume Showdown',
    bar_name: 'Greta Bar',
    date: 'Oct. 31, 2019',
    start_time: '16:00',
    end_time: '17:00',
    attendees: 18,
  },
];

export const host_profile = () =>
  <Profile
    name="Kat Connolly"
    email="k.connolly@nomail.com"
    tag_line="Software Engineer with a Flair for Design"
  />

export const host_event_list = () =>
  <HostEventList
    message="HOSTING"
    events={hostingEvents}
  />

export const user_event_list = () =>
  <EventList
    message="ATTENDING"
    events={attendingEvents}
  />

export const host_show = () =>
  <HostShow
    user_name="Kat Connolly"
    bar_name="The Last Best Brewing Company"
    event_name="Graduation & Celebration Drinks"
    date="Oct. 10, 2019"
    start_time="20:00"
    end_time="23:00"
    tag_line="Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22-JUL-2019."
    attendees="18"
    onEdit={action("onEdit")}
    onDelete={action("onConfirm")}
  />



const user = [
  {
    id: 1,
    name: "Kat Connolly",
    email: "k.connolly@nomail.com",
    tag_line: "Software Engineer with a Flair for Design",
    avatar: "https://media.licdn.com/dms/image/C5603AQFUiMn0YgEGvQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=pfCRLAtRZ0Pj6HlofNazjfwg-oEuH3mxf1TTM1gStgQ"
  }
]



export const User_view = () =>
  <User
    key={user[0].id}
    id={user[0].id}
    name={user[0].name}
    email={user[0].email}
    tag_line={user[0].tag_line}
    avatar={user[0].avatar}
    updateProfile={'from application passed from useApplicationData'}
    hostingEvents={hostingEvents}
    attendingEvents={attendingEvents}
    hostingMessage="HOSTING"
    getEventById='function to display single event'
    attendingMessage="Attending"



  />