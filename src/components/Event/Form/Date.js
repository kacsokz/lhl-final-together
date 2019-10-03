import React        from 'react';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const useDatePicker = () => {
  const [eventDate, setEventDate] = React.useState();
  const FIELDS = {
    eventDate: setEventDate,
  }
  const handleDateChange = (fieldName) => (date) => {
    FIELDS[fieldName](date)
  }

  return { eventDate, handleDateChange }
}

const Date = ({
  eventDate,
  handleDateChange
}) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
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
}

export default Date;