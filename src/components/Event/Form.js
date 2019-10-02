import React from 'react';
import Button from 'components/common/Button';

import KCPicker, { usePicker } from './KCPicker';

export default function Form(props) {

  // The first commit of Material-UI
  const pickerProps = usePicker();


  const validate = () => {
    const {
      eventDate,
      eventStart,
      eventEnd
    } = pickerProps;

    console.log(`{
      eventDate,
      eventStart,
      eventEnd
    }`,
    eventDate.value,
    {
      eventStart,
      eventEnd
    })
  };

  const cancel = () => {

  };

  return (
    <main className="event__card event__card--create">
      <KCPicker {...pickerProps} />
      <section className="event__actions">
        <Button
          confirm
          onClick={validate}
        >
          Confirm
        </Button>
        <Button
          cancel
          onClick={cancel}
        >
          Cancel
        </Button>
      </section>
    </main>
  );
};
