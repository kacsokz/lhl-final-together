import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField      from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    width: 400,
    fontFamily: theme.brand.bodyFont,
  }
}));

export default function Email(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState(
    // Init State is Tag_Line if Existing || ""
    "k.connolly@nomail.com"
  );

  const handleEmailChange = email => event => {
    setValues({ ...values, [email]: event.target.value });
  };

  return (
    <form
      className="user__card--profile-email"
      noValidate autoComplete="off"
    >
      <TextField
        id="standard-email"
        label="Email"
        className={classes.textField}
        value="kat.connolly@nomail.com"
        // value={values.email}
        onChange={handleEmailChange('email')}
        margin="normal"
        required="true"
      />
    </form>
  );
}
