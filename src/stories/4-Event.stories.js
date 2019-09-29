import React from 'react';

import { action } from '@storybook/addon-actions';

import Button from 'components/Button';
import Show from 'components/Event/Show';

export default {
  title: 'Event',
};

export const show = () => (
  <Show>
    <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
  </Show>
);