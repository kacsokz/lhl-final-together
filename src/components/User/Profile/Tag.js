import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    width: 400,
  }
}));

export default function TagLine(props) {
  const classes = useStyles();

  const handleChange = name => event => {
    props.setTagLine(event.target.value);
  };

  return (
    <form
      className="user__card--profile-tag"
      noValidate autoComplete="off"
    >
      <TextField
        id="standard-tag"
        label="Tag Line"
        className={classes.textField}
        defaultValue={props.tag_line}
        // value={props.tag_line}
        onChange={handleChange('tagLine')}
        margin="normal"
        multiline={true}
      />
    </form>
  );
}
