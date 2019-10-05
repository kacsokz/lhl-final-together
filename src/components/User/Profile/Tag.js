import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField      from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    width: 400,
  }
}));

export default function TagLine(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState(
    // Init State is Tag_Line if Existing || ""
    "Software Engineer with a Flair for Design"
  );

  const handleTagChange = tag => event => {
    setValues({ ...values, [tag]: event.target.value });
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
        value={values.tag}
        onChange={handleTagChange('tag')}
        margin="normal"
        multiline={true}
      />
    </form>
  );
}
