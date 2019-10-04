import React   from 'react';

import Confirm from 'components/Common/Confirm';
import Error   from 'components/Common/Error';
import Status  from 'components/Common/Status';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Common Views',
};

export const confirm_view = () =>
<Confirm
  message="Delete the appointment?"
  onConfirm={action("onConfirm")}
  onCancel={action("onCancel")}
/>

export const error_view = () =>
<Error />;

export const status_view = () =>
<Status />;