import React from 'react';

import 'components/Event/styles.scss';

import Form from 'components/Event/Form';
import List from 'components/Event/List';
import Show from 'components/Event/Show';
import { action } from '@storybook/addon-actions';

const events = [
  {
    event_name: 'Graduation & Celebration Drinks',
    bar_name: 'The Last Best Brewing Company',
    date: 'Oct. 10, 2019',
    start_time: '20:00',
    end_time: '23:00',
    attendees: 18,
  },
  {
    event_name: 'Halloween Costume Showdown',
    bar_name: 'Greta Bar',
    date: 'Oct. 31, 2019',
    start_time: '16:00',
    end_time: '17:00',
    attendees: 18,
  },
  {
    event_name: 'Pixels & Pints 10th Anniversary',
    bar_name: 'Hudsons Canadas Pub',
    date: 'Nov. 7, 2019',
    start_time: '17:00',
    end_time: '21:00',
    attendees: 18,
  },
  {
    event_name: 'Holiday Party',
    bar_name: 'El Furniture Warehouse',
    date: 'Dec. 7, 2019',
    start_time: '15:00',
    end_time: '16:00',
    attendees: 18,
  },
  {
    event_name: 'KVs NY PBs',
    bar_name: 'Craft Beer Market',
    date: 'Jan. 1, 2019',
    start_time: '16:00',
    end_time: '17:00',
    attendees: 18,
  }
];

export default {
  title: 'Event',
};

export const form = () => (
  <Form
    onSave={action("onSave")}
    onCancel={action("onCancel")}
  />
);

export const list = () => (
  <List
    events={events}
  />
);

export const show = () => (
  <Show
    user_name="Kat Connolly"
    bar_name="The Last Best Brewing Company"
    event_name="Graduation & Celebration Drinks"
    date="Oct. 10, 2019"
    start_time="20:00"
    end_time="23:00"
    tag_line="Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22-JUL-2019."
    attendees="18"
    onJoin={action("onJoin")}
  />
);