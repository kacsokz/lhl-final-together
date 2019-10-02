import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

import TimePickerToolbar from './TimePickerToolbar';

export const usePicker = () => {
  const [eventDate, setEventDate] = React.useState(Date.now());
  const [eventStart, setEventStart] = React.useState(Date.now());
  const [eventEnd, setEventEnd] = React.useState(Date.now());
  const FIELDS = {
    eventDate: setEventDate,
    eventStart: setEventStart,
    eventEnd: setEventEnd,
  }
  const handleDateChange = (fieldName) => (date, value) => {
    FIELDS[fieldName](date)
  }

  return { eventDate, eventStart, eventEnd, handleDateChange }
}

const usePickerStyles = makeStyles({
  dialog: {
    '& .MuiPickersBasePicker-pickerView': { display: 'none' }
  }
})

const KCPicker = ({
  eventDate,
  eventStart,
  eventEnd,
  handleDateChange
}) => {

  const classes = usePickerStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            style={{
              color: 'red'
            }}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Select Event Date"
            value={eventDate}
            onChange={handleDateChange('eventDate')}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
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
          <KeyboardTimePicker
            DialogProps={{ className: classes.dialog }}
            margin="normal"
            id="time-picker-end"
            label="Select End Time"
            value={eventEnd}
            onChange={handleDateChange('eventEnd')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
  )
}

export default KCPicker;