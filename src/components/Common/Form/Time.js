import 'date-fns';
import React              from 'react';
import { makeStyles }     from '@material-ui/core';
import { addHours, differenceInSeconds, addSeconds }       from 'date-fns';
import DateFnsUtils       from '@date-io/date-fns';
import TimePickerToolbar  from './TimePickerToolbar';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { isSameDay } from 'date-fns/esm';

const useTimePickerStyles = makeStyles({
  dialog: {
    '& .MuiPickersBasePicker-pickerView': { display: 'none' }
  },
  textField: {
    width: 390,
  }
})

export const useTimePicker = ({ date: propsDate, start, end }) => {
  const initStartTime = start || propsDate || new Date();
  const initEndTime = end || addHours(initStartTime, 1);
  const [eventStart, setEventStart] = React.useState(initStartTime);
  const [eventEnd, setEventEnd] = React.useState(initEndTime);

  const updateDate = (newDate) => {
    if (!newDate || newDate === 'Invalid Date') return;
    if (!isSameDay(newDate, eventStart)) {
      const diffStartInSeconds = differenceInSeconds(newDate, eventStart);
      const updateStart = addSeconds(eventStart, diffStartInSeconds);
      setEventStart(updateStart);
    }

    if (!isSameDay(newDate, eventEnd)) {
      const diffEndInSeconds = differenceInSeconds(newDate, eventEnd);
      const updateEnd = addSeconds(eventEnd, diffEndInSeconds);
      setEventEnd(updateEnd);
    }
  }

  updateDate(propsDate)
  
  const FIELDS = {
    eventStart: setEventStart,
    eventEnd: setEventEnd,
  }
  const handleTimeChange = (fieldName) => (date, value) => {
    if (fieldName === "eventStart") {
      setEventEnd(addHours(date, 1));
    }
    FIELDS[fieldName](date)
  }
  return { eventStart, eventEnd, handleTimeChange }
}

export default function EvtTime({
  eventStart,
  eventEnd,
  date,
  handleTimeChange
}) {

  const classes = useTimePickerStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <section>
        <KeyboardTimePicker
          className={classes.textField}
          // date={date}
          ampm={false}
          DialogProps={{ className: classes.dialog }}
          margin="normal"
          variant="dialog"
          ToolbarComponent={TimePickerToolbar}
          id="time-picEnd"
          label="Select Start Time"
          value={eventStart}
          onChange={handleTimeChange('eventStart')}
          KeyboardButtonProps={{
            'aria-label': 'change start time',
          }}
        />
      </section>
      <section>
        <KeyboardTimePicker
          className={classes.textField}
          // date={date}
          ampm={false}
          DialogProps={{ className: classes.dialog }}
          margin="normal"
          variant="dialog"
          ToolbarComponent={TimePickerToolbar}
          id="time-picker-end"
          label="Select End Time"
          value={eventEnd}
          onChange={handleTimeChange('eventEnd')}
          KeyboardButtonProps={{
            'aria-label': 'change end time',
          }}
        />
      </section>
    </MuiPickersUtilsProvider>
  )
}
