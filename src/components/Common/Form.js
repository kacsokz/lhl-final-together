import React          from 'react';
import Button         from 'components/Common/Button';
import SelectLocation from './Form/SelectLocation';
import EventName      from './Form/Name';
import EventTag       from './Form/Tag';
import EventDate, { useDatePicker } from './Form/Date';
import EventTime, { useTimePicker } from './Form/Time';

const useInputState = (init) => {
  const [state, setState] = React.useState(init);
  
  const handleChange = event => {
    setState(pState => ({
      ...pState,
      [event.target.name]: event.target.value,
    }));
  }

  return { state, handleChange };
};

export default function Form(props) {
  const { eventDate, eventStart, eventEnd, bar_id = "", name, tag } = props;

  const  stateAndHandler = useInputState({
    bar_id,
    name,
    tag,
  });
  const pickerDateProps = useDatePicker(eventDate || new Date());
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

    // props.onSave( eventDate, eventStart, eventEnd, stateAndHandler.state.bar_id )
const event = {date: eventDate, start_time: eventStart,
end_time: eventEnd, bar_id: stateAndHandler.state.bar_id,
event_name: stateAndHandler.state.name, tag_line: stateAndHandler.state.tag }
    // console.log( event );
  };

  return (

    <main className="event__card event__card--form">
      <h1 className="event__card--header text--header">EVENT ADMIN</h1>
      
      <section className="event__card--form-body">

        <SelectLocation {...stateAndHandler} />
        <EventName {...stateAndHandler} />
        <EventTag {...stateAndHandler} />
        <EventDate {...pickerDateProps} />
        <EventTime {...pickerTimeProps} />

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
