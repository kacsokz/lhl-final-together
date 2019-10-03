import React from 'react';

import 'components/Event/styles.scss';

import Form from 'components/Event/Form';
import List from 'components/Event/List';
import Show from 'components/Event/Show';

export default {
  title: 'Event',
};

export const form = () => <Form />;

export const list = () => (
  <List
     event_name=""
     bar_name="The Last Best Brewing Company"
     date=""
     start_time=""
     end_time=""
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
  />
);