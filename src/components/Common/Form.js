import React          from 'react';
import Button         from 'components/Common/Button';
import SelectLocation from './Form/SelectLocation';
import EventName      from './Form/Name';
import EventTag       from './Form/Tag';
import Date, { useDatePicker } from './Form/EvtDate';

import EvtTime, { useTimePicker } from './Form/Time';

export default function Form(props) {
  const { eventDate, eventStart, eventEnd } = props;

  const pickerDateProps = useDatePicker(eventDate);
  const pickerTimeProps = useTimePicker({
    date: pickerDateProps.eventDate,
    start: eventStart,
    end: eventEnd
  });

  const reset = () => {

  };

  const cancel = () => props.onCancel(reset());

  const validate = () => {
    const { eventDate } = pickerDateProps;

    const { eventStart, eventEnd } = pickerTimeProps;


    console.log({ eventDate, eventStart, eventEnd });
  };

  return (

    <main className="event__card event__card--form">
      <h1 className="event__card--header text--header">EVENT ADMIN</h1>
      
      <section className="event__card--form-body">

        <SelectLocation />
        <EventName />
        <EventTag />
        <Date {...pickerDateProps} />

        <EvtTime {...pickerTimeProps} />

        {/* <Date {...pickerDateProps}
          className="event__card--form-body-date"
        />
        <EvtTime {...pickerTimeProps} /> */}

        <section>
          <Button red onClick={cancel} >
            Cancel
          </Button>
          <Button blue onClick={validate}>
            Save
          </Button>
        </section>

      </section>
    </main>
  );
};
