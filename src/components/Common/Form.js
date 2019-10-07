import React          from 'react';
import Button         from 'components/Common/Button';
import SelectLocation from './Form/SelectLocation';
import EventName      from './Form/Name';
import EventTag       from './Form/Tag';
import EventDate      from './Form/Date';

export default function Form(props) {

  // const pickerDateProps = useDatePicker();


  const reset = () => {

  };

  const cancel = () => props.onCancel(reset());

  const validate = () => {
    // const { eventStart, eventEnd } = pickerDateProps;

    // console.log({ eventStart, eventEnd });
  };

  return (
    <main className="event__card event__card--form">
      <h1 className="event__card--header text--header">EVENT ADMIN</h1>
      
      <section className="event__card--form-body">

        <SelectLocation />
        <EventName />
        <EventTag />
        <EventDate />

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
