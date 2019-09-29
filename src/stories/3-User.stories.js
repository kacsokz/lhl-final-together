import React from 'react';
import  Profile  from 'components/User/profile';
import  EventsList  from 'components/User/eventsList';

export default {
  title: 'User',
};

export const profile = () => 
<Profile></Profile>;

export const event = () =>
<EventsList></EventsList>;