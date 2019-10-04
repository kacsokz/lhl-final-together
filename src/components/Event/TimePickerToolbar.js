import React from 'react';
import { InputBase, makeStyles } from '@material-ui/core'
import { darken } from '@material-ui/core/styles';

import { getHours, getMinutes, setHours, setMinutes } from 'date-fns';

const flex = {
  display: 'flex',
  alignItems: 'center'
}
const useToolbarStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.brand.main,
    padding: theme.spacing(5),
    ...flex,
    justifyContent: 'flex-end'
  },
  timeInput: {
    width: 110,
    lineHeight: 50,
    fontSize: 50,
    padding: 0,
    border: 'none',
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.brand.accentLight
    }
  },
  timeWrapper: {
    ...flex,
  },
  amPmClass: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    '& button': {
      fontSize: '1em',
      padding: theme.spacing(2),
      border: 'none',
      backgroundColor: darken(theme.brand.main, 0.5),
      '&:hover': {
        backgroundColor: theme.brand.accentLight
      }
    }
  },
  selected: {
    backgroundColor: `${theme.brand.accentLight} !important`
  }
}))

function pad(num, size) {
  var s = "00" + num;
  return s.substr(s.length-size);
}

const useTime = (initDate) => {
  const [date] = React.useState(initDate);

  const initHr = pad(getHours(initDate), 2)
  const initMin = pad(getMinutes(initDate), 2)

  const [hour, setHourStr] = React.useState(pad(initHr, 2));
  const [minute, setMinuteStr] = React.useState(pad(initMin, 2));

  const handleHourChange = onChange => ({ target: { value }}) => {
    let hr = value;
    if(hr < 0) hr += 23;
    if(hr > 23) hr -= 24;
    setHourStr(pad(hr, 2))
    const newDate = setHours(
      setMinutes(date, Number(minute)),
      hr
    )
    onChange(newDate)
  }
  const handleMinuteChange = onChange => ({ target: { value }}) => {
    let min = value;
    if(min > 59) min -= 60;
    if(min < 0) min += 59;
    
    setMinuteStr(pad(min, 2))
    const newDate = setHours(
      setMinutes(date, min),
      Number(hour)
    )
    onChange(newDate)
  }

  return {
    hour,
    minute,
    handleHourChange,
    handleMinuteChange
  }
}

const TimePickerToolbar = (props) => {
  console.log("PROPS TOOLBAR", props)
  const { onChange } = props;
  const {
    root,
    timeInput,
    timeWrapper,
  } = useToolbarStyles();
  const { handleHourChange, handleMinuteChange, hour, minute } = useTime(props.date);
return (
  <div className={root}>
    <div className={timeWrapper}>
      <InputBase
        className={timeInput}
        value={hour}
        type="number"
        min="01"
        max="23"
        onChange={handleHourChange(onChange)}
      />
      <h1>:</h1>
      <InputBase
        className={timeInput}
        value={minute}
        type="number"
        min="00"
        max="59"
        onChange={handleMinuteChange(onChange)}
      />
    </div>
  </div>
)}

export default TimePickerToolbar;