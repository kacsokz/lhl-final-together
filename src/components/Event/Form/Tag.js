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
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function EventTag() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    tag: '',
  });

  const handleTagChange = tag => event => {
    setValues({ ...values, [tag]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-tag"
        label="Tag Line"
        className={classes.textField}
        value={values.tag}
        onChange={handleTagChange('tag')}
        margin="normal"
      />
    </form>
  );
}