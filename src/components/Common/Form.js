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

    let curr_date = eventDate.getDate();
let curr_month = eventDate.getMonth() + 1; //Months are zero based
let curr_year = eventDate.getFullYear();

let start_hour = eventStart.getHours();
let start_min = eventStart.getMinutes();
let end_hour = eventEnd.getHours();
let end_min = eventEnd.getMinutes();
const start =(start_hour + ":" + start_min);
const end =(end_hour + ":" + end_min);

let m_names = ["Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sept", 
"Oct", "Nov", "Dec"];

const convertedDate = m_names[curr_month - 1] + ". " + curr_date + ", " + curr_year

    // props.onSave( eventDate, eventStart, eventEnd, stateAndHandler.state.bar_id )
const event = {date: convertedDate, start_time: start,
end_time: end, bar_id: stateAndHandler.state.bar_id,
event_name: stateAndHandler.state.name, tag_line: stateAndHandler.state.tag }

console.log(event)
props.onSave(convertedDate, start, end, stateAndHandler.state.bar_id,
  stateAndHandler.state.name, stateAndHandler.state.tag)





    // console.log( eventStart );
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
