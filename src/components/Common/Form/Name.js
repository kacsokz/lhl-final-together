import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField      from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 390,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function EventName({ state: { name }, handleChange }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        name="name"
        label="Event Name"
        className={classes.textField}
        defaultValue={name}
        onBlur={handleChange}
        margin="normal"
        multiline={true}
      />
    </form>
  );
}
