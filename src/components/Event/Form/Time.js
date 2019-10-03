import React          from 'react';
import { makeStyles } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils   from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

import TimePickerToolbar from '../TimePickerToolbar';

export const useTimePicker = () => {

  const initStartTime = Date.now();
  const initEndTime = initStartTime + 3600000;

  const [eventStart, setEventStart] = React.useState(initStartTime);
  const [eventEnd, setEventEnd] = React.useState(initEndTime);
  const FIELDS = {
    eventStart: setEventStart,
    eventEnd: setEventEnd,
  }
  const handleDateChange = (fieldName) => (date, value) => {
    FIELDS[fieldName](date)
  }

  return { eventStart, eventEnd, handleDateChange }
}

const useTimePickerStyles = makeStyles({
  dialog: {
    '& .MuiPickersBasePicker-pickerView': { display: 'none' }
  }
})

const EvtTime = ({
  eventStart,
  eventEnd,
  handleDateChange
}) => {

  const classes = useTimePickerStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <section>
        <KeyboardTimePicker
          DialogProps={{ className: classes.dialog }}
          margin="normal"
          variant="dialog"
          ToolbarComponent={TimePickerToolbar}
          id="time-picker-start"
          label="Select Start Time"
          value={eventStart}
          onChange={handleDateChange('eventStart')}
          KeyboardButtonProps={{
            'aria-label': 'change start time',
          }}
        />
      </section>
      <section>
        <KeyboardTimePicker
          DialogProps={{ className: classes.dialog }}
          margin="normal"
          variant="dialog"
          ToolbarComponent={TimePickerToolbar}
          id="time-picker-end"
          label="Select End Time"
          value={eventEnd}
          onChange={handleDateChange('eventEnd')}
          KeyboardButtonProps={{
            'aria-label': 'change end time',
          }}
        />
      </section>
    </MuiPickersUtilsProvider>
  )
}

export default EvtTime;