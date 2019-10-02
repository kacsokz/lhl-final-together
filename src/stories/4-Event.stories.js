import React from 'react';

import 'components/Event/styles.scss';

import Form from 'components/Event/Form';
import List from 'components/Event/List';
import Show from 'components/Event/Show';

export default {
  title: 'Event',
};

const users = [
  {
    id: 1,
    first_name: 'Kat',
    last_name: 'Connolly',
    email: 'k.connolly@nomail.com',
    avatar: '',
    tag_line: 'Fun & Outgoing Software Engineer'
  },
  {
    id: 2,
    first_name: 'Tony',
    last_name: 'Grimes',
    email: 't.grimes@nomail.com',
    avatar: '',
    tag_line: 'Mentor & Community Leader'
  },
  {
    id: 3,
    first_name: 'Nima',
    last_name: 'Boscarino',
    email: 'n.boscarino@nomail.com',
    avatar: '',
    tag_line: 'Stay yeezy'
  },
  {
    id: 4,
    first_name: 'Hafiz',
    last_name: 'Suara',
    email: 'h.suara@nomail.com',
    avatar: '',
    tag_line: 'Developer, Mentor and Friend'
  },
  {
    id: 5,
    first_name: 'Khurram',
    last_name: 'Virani',
    email: 'k.virani@nomail.com',
    avatar: '',
    tag_line: 'Professional Developer, Entrepreneur and Top Notch Voice Actor'
  }
];

const bars = [
  {
    id: 1,
    name: 'The Last Best Brewing Company',
    latitude: -114.074559,
    longitude: 51.042613,
    address: '607 11 Ave SW, Calgary, AB T2R 0E1',
    start_time: '15:30',
    end_time: '16:30'
  },
  {
    id: 2,
    name: 'Greta Bar',
    latitude: -114.066669,
    longitude: 51.043242,
    address: '213 10 Ave SW, Calgary, AB T2R 0A4',
    start_time: '15:00',
    end_time: '17:00'
  },
  {
    id: 3,
    name: 'Hudsons Canadas Pub',
    latitude: -114.074565,
    longitude: 51.041519,
    address: '1201 5 St SW, Calgary, AB T2R 0Y6',
    start_time: '16:00',
    end_time: '17:00'
  },
  {
    id: 4,
    name: 'El Furniture Warehouse',
    latitude: -114.063567,
    longitude: 51.045587,
    address: '107 8 Ave SW, Calgary, AB T2P 1B4',
    start_time: '15:30',
    end_time: '17:30'
  },
  {
    id: 5,
    name: 'Craft Beer Market',
    latitude: -114.070548,
    longitude: 51.043386,
    address: '345 10 Ave SW, Calgary, AB T2R 0A5',
    start_time: '14:00',
    end_time: '16:00'
  }
];

const events = [
  {
    id: 1,
    user_id: 1,
    bar_id: 1,
    name: 'Graduation & Celebration Drinks',
    date: 'Oct. 10, 2019',
    start_time: '20:00',
    end_time: '23:00',
    tag_line: 'Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22JUL2019.'
  },
  {
    id: 2,
    user_id: 2,
    bar_id: 2,
    name: 'Costume Showdown',
    date: 'Oct. 31, 2019',
    start_time: '16:00',
    end_time: '17:00',
    tag_line: 'Best costume gets a shot and 5 nima bucks.'
  },
  {
    id: 3,
    user_id: 3,
    bar_id: 3,
    name: 'Pixels & Pints 10th Anniversary',
    date: 'Nov. 7, 2019',
    start_time: '17:00',
    end_time: '21:00',
    tag_line: 'For 10 years, Calgarys best and brightest in tech and digital design have been meeting for drinks. Sometimes theres cake.'
  },
  {
    id: 4,
    user_id: 4,
    bar_id: 4,
    name: 'Holiday Party',
    date: 'Dec. 7, 2019',
    start_time: '15:00',
    end_time: '16:00',
    tag_line: 'Mainly coffee, maybe a little irish cream...?'
  },
  {
    id: 5,
    user_id: 5,
    bar_id: 5,
    name: 'KVs NY & PBs',
    date: 'Jan. 1, 2019',
    start_time: '16:00',
    end_time: '17:00',
    tag_line: 'Classy Conversations and Polar Bear Shots.'
  }
];

export const form = () => <Form />;

export const list = () => <List />;

export const show = () => (
  <Show
    user_id="Kat Connolly"
    bar_name="The Last Best Brewing Company"
    date="Oct. 10, 2019"
    start_time="20:00"
    end_time="23:00"
    tag_line="Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22JUL2019."
    attendees="18"
  />
  );