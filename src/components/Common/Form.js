import React                      from 'react';
import Button                     from 'components/Common/Button';

import SelectLocation             from './Form/SelectLocation';
import EventName                  from './Form/Name';
import Date, { useDatePicker }    from './Form/Date';
import EventTag                   from './Form/Tag';
import EvtTime, { useTimePicker } from './Form/Time';

export default function Form(props) {

  const pickerDateProps = useDatePicker();
  const pickerTimeProps = useTimePicker();

  const reset = () => {

  };

  const cancel = () => props.onCancel(reset());

  const validate = () => {
    // const {
    //   eventDate
    // } = pickerDateProps;

    // const {
    //   eventStart,
    //   eventEnd,
    // } = pickerTimeProps;

    // console.log(`{
    //   eventDate,
    //   eventStart,
    //   eventEnd
    // }`,
    // eventDate.value,
    // {
    //   eventStart,
    //   eventEnd
    // })
    // console.log('event Saved')
    let eventData = 'event form function'
    props.onSave(eventData)
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
