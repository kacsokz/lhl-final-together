import React          from 'react';
import { makeStyles } from '@material-ui/core';
import DateFnsUtils   from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  textField: {
    width: 390,
  }
});

export const useDatePicker = (initDate) => {
  const [eventDate, setEventDate] = React.useState(initDate);
  const FIELDS = {
    eventDate: setEventDate,
  }
  const handleDateChange = (fieldName) => (date) => {
    FIELDS[fieldName](date)
  }

  return { eventDate, handleDateChange }
};

const EventDate = ({
  eventDate,
  handleDateChange
}) => {

  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.textField}
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
    </MuiPickersUtilsProvider>
  )
};

export default EventDate;
