import React          from 'react';
import { makeStyles } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils   from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

import TimePickerToolbar from '../TimePickerToolbar';

export const useStartTimePicker = () => {
  const [eventStart, setEventStart] = React.useState(Date.now());
  const FIELDS = {
    eventStart: setEventStart,
  }
  const handleDateChange = (fieldName) => (date) => {
    FIELDS[fieldName](date)
  }

  return { eventStart, handleDateChange }
}

const usePickerStyles = makeStyles({
  dialog: {
    '& .MuiPickersBasePicker-pickerView': { display: 'none' }
  }
})

const StartTime = ({
  eventStart,
  handleDateChange
}) => {

  const classes = usePickerStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              'aria-label': 'change time',
            }}
          />
      </MuiPickersUtilsProvider>
  )
}

export default StartTime;