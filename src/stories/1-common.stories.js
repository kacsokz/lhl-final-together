import React      from 'react';
import { action } from '@storybook/addon-actions';

import Form       from 'components/Common/Form';
import Confirm    from 'components/Common/Confirm';
import Error      from 'components/Common/Error';
import Status     from 'components/Common/Status';

export default {
  title: 'Common Views',
};

export const form = () => (
  <Form
    onSave={action("onSave")}
    onCancel={action("onCancel")}
  />
);

export const confirm = () =>
  <Confirm
    message="Delete the event?"
    onConfirm={action("onConfirm")}
    onCancel={action("onCancel")}
  />

export const error_saving = () =>
  <Error
    message="Could not save event."
    onClose={action("onClose")}
  />;

export const error_deleting = () =>
  <Error
    message="Could not delete event."
    onClose={action("onClose")}
  />;

export const status_saving = () =>
  <Status
    message="Saving..." 
  />;

export const status_deleting = () =>
  <Status 
    message="Deleting..."
  />;