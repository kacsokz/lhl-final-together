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

  var curr_date = eventDate.getDate();
var curr_month = eventDate.getMonth() + 1; //Months are zero based
var curr_year = eventDate.getFullYear();

let m_names = ["Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sept", 
"Oct", "Nov", "Dec"];

const convertedDate = m_names[curr_month - 1] + ". " + curr_date + ", " + curr_year

  // console.log(eventDate.toString())
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
