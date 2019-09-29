import React from 'react';

import Confirm from 'components/Confirm';
import Error from 'components/Error';
import Form from 'components/Event/Form';
import List from 'components/Event/List';
import Show from 'components/Event/Show';
import Status from 'components/Status';

export default {
  title: 'Event',
};

export const confirm = () => <Confirm />;

export const error = () => <Error />;

export const form = () => <Form />;

export const list = () => <List />;

export const show = () => <Show />;

export const status = () => <Status message="Saving..." />;