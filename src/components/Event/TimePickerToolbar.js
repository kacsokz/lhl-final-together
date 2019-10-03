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
    width: 80,
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
    // padding: theme.spacing(2)
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

const convertToAmPmStr = (hour) => {
  const pm = hour - 12;
  if (pm > 0) return [pm, 'PM']
  return [hour, 'AM']
}

const useTime = (initDate) => {
  const [date] = React.useState(initDate);

  const initHr = pad(getHours(initDate), 2)
  const initMin = pad(getMinutes(initDate), 2)

  const [convertedHr, initAmPm] = convertToAmPmStr(initHr);
  const [hour, setHourStr] = React.useState(pad(convertedHr, 2));
  const [minute, setMinuteStr] = React.useState(pad(initMin, 2));
  const [amPmState, setAmPm] = React.useState(initAmPm)

  const handleHourChange = onChange => ({ target: { value }}) => {
    let hr = value;
    if(hr < 1) hr += 12;
    if(hr > 11) hr -= 12;
    setHourStr(pad(hr, 2))

    onChange(setHours(date, hr))
  }
  const handleMinuteChange = onChange => ({ target: { value }}) => {
    let min = value;
    if(min > 59) min -= 60;
    if(min < 0) min += 59;
    
    setMinuteStr(pad(min, 2))
    onChange(setMinutes(date, min))
  }

  const handleAmPmChange = (onChange, amPm) => {
    if (amPm === amPmState) return;
    const hourNum = Number(hour)
    const militaryHr = amPm === 'PM' ? hourNum + 12 : hourNum;
    setAmPm(amPm);
    onChange(setHours(date, militaryHr))
  }

  return {
    amPmState,
    handleAmPmChange,
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
    amPmClass,
    selected
  } = useToolbarStyles();
  const { handleHourChange, handleMinuteChange, hour, minute, amPmState, handleAmPmChange } = useTime(props.date);
return (
  <div className={root}>
    <div className={timeWrapper}>
      <InputBase
        className={timeInput}
        value={hour}
        type="number"
        min="01"
        max="12"
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
    <div className={amPmClass}>
      <button
        className={amPmState === 'AM' ? selected : ''}
        onClick={() => handleAmPmChange(onChange, 'AM')}>
          AM
      </button>
      <button
        className={amPmState === 'PM' ? selected : ''}
        onClick={() => handleAmPmChange(onChange, 'PM')}>
          PM
      </button>
    </div>
  </div>
)}

export default TimePickerToolbar;