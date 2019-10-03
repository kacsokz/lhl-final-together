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
  const [eventEnd, setEventEnd] = React.useState(Date.now());
  const FIELDS = {
    eventStart: setEventEnd,
  }
  const handleDateChange = (fieldName) => (date) => {
    FIELDS[fieldName](date)
  }

  return { eventEnd, handleDateChange }
}

const usePickerStyles = makeStyles({
  dialog: {
    '& .MuiPickersBasePicker-pickerView': { display: 'none' }
  }
})

const EndTime = ({
  eventEnd,
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
            value={eventEnd}
            onChange={handleDateChange('eventStart')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
      </MuiPickersUtilsProvider>
  )
}

export default EndTime;