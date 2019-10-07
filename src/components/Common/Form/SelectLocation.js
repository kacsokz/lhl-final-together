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
    minWidth: 390,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectLocation({ state: { bar_id }, handleChange}) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel>Location</InputLabel>
        <Select
          value={bar_id}
          onChange={handleChange}
          inputProps={{
            name: 'bar_id',
            id: 'bar_id',
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