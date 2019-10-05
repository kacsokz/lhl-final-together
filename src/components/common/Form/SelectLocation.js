import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel     from '@material-ui/core/InputLabel';
import MenuItem       from '@material-ui/core/MenuItem';
import FormControl    from '@material-ui/core/FormControl';
import Select         from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectLocation() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    bar: '',
    name: 'hai',
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel>Location</InputLabel>
        <Select
          value={values.bar}
          onChange={handleChange}
          inputProps={{
            name: 'bar',
            id: 'bar',
          }}
        >
          <MenuItem value={1}>The Last Best Brewing Company</MenuItem>
          <MenuItem value={2}>Greta Bar</MenuItem>
          <MenuItem value={3}>Hudsons Canadas Pub</MenuItem>
          <MenuItem value={4}>El Furniture Warehouse</MenuItem>
          <MenuItem value={5}>Craft Beer Market</MenuItem>
        </Select>
      </FormControl>

    </form>
  );
}