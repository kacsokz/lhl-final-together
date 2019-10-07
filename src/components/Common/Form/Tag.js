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

export default function EventTag({ state: { tag }, handleChange }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-tag"
        name="tag"
        label="Tag Line"
        defaultValue={tag}
        className={classes.textField}
        onBlur={handleChange}
        margin="normal"
        multiline={true}
      />
    </form>
  );
};
