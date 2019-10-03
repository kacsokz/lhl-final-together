import React                      from 'react';
import Button                     from 'components/common/Button';

import EvtTime, { useTimePicker } from './Form/Time';
import Date, { useDatePicker }    from './Form/Date';
import SelectLocation             from  './Form/SelectLocation';
import EventName                  from './Form/Name';
import EventTag                   from './Form/Tag';

export default function Form(props) {

  const pickerDateProps = useDatePicker();
  const pickerTimeProps = useTimePicker();

  const validate = () => {
    const {
      eventDate
    } = pickerDateProps;

    const {
      eventStart,
      eventEnd,
    } = pickerTimeProps;

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
      <h1 className="event__card--header text--header">{props.user_name}'s Event</h1>
      <section className="event__card--create-form">
        <SelectLocation />
        <EventName />
        <EventTag />
        <Date {...pickerDateProps} />
        <EvtTime {...pickerTimeProps} />
      </section>

      <section className="event__card--create-cc">
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
