import React                      from 'react';
import Button                     from 'components/Common/Button';

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
    <main className="event__card event__card--form">
      <h1 className="event__card--header text--header">EVENT ADMIN</h1>
      
      <section className="event__card--form-body">

        <SelectLocation />
        <EventName />
        <EventTag />
        <Date {...pickerDateProps}
          className="event__card--form-body-date"
        />
        <EvtTime {...pickerTimeProps} />

        <section>
          <Button
            cancel
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            confirm
            onClick={validate}
          >
            Confirm
          </Button>
        </section>

      </section>
    </main>
  );
};
