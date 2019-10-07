import 'date-fns';
import { addHours } from 'date-fns';
import React from 'react';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    width: 390,
  },
}));

export const useTimePicker = () => {

  const initStartTime = new Date();
  const initEndTime = addHours(initStartTime, 1);

  const [eventStart, setEventStart] = React.useState(initStartTime);
  const [eventEnd, setEventEnd] = React.useState(initEndTime);

  const FIELDS = {
    eventStart: setEventStart,
    eventEnd: setEventEnd,
  }

  const handleDateChange = (fieldName) => (date, value) => {
    if (fieldName === "eventStart") {
      setEventEnd(addHours(date, 1));
    }
    FIELDS[fieldName](date)
  }

  return { eventStart, eventEnd, handleDateChange }
}

export default function EventDate({
  eventStart,
  eventEnd,
  handleDateChange
}) {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <section>
        <KeyboardDateTimePicker
          className={classes.textField}
          variant="inline"
          ampm={false}
          label="Event Start"
          value={eventStart}
          // onChange={handleDateChange('eventStart')}
          onError={console.log}
          disablePast
          // format="yyyy/MM/dd HH:mm"
        />
      </section>
      <section>
        <KeyboardDateTimePicker
          className={classes.textField}
          variant="inline"
          ampm={false}
          label="Event End"
          value={eventEnd}
          // onChange={handleDateChange('eventEnd')}
          onError={console.log}
          disablePast
          // format="yyyy/MM/dd HH:mm"
        />
      </section>
    </MuiPickersUtilsProvider>
  );
}
