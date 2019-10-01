import React from 'react';
import  Button  from 'components/common/Button';
import  Confirm  from 'components/common/Confirm';
import  Error  from 'components/common/Error';
import  Status  from 'components/common/Status';

export default {
  title: 'common',
};

export const confirm_button = () =>
<Button confirm>Confirm</Button>;

export const cancel_button = () =>
<Button cancel>Cancel</Button>;

export const Confirm_view = () =>
<Confirm></Confirm>;

export const Error_view = () =>
<Error></Error>;

export const Status_view = () =>
<Status></Status>;