import React from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Button from "components/Button";
import Avatar from '@material-ui/core/Avatar';
import "components/User/styles.scss";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    padding: "top",
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  return (
    <div className="profile-container">
      <Avatar alt="Avatar" src="https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/02/02/2017-09-05t123641z_2074388227_rc1f50c4add0_rtrmadp_3_filmfestival-venice.jpg?itok=oNSajv26&timestamp=1517521109" className={classes.bigAvatar} />
      <div className="user-details"><h3>{"firstName"}</h3></div>
      <div className="user-details"><h3>{"lastName"}</h3></div>
      <div className="user-details"><h3>{"existed Tagline"}</h3></div>
      <div className="tagline">
        <FormControl className="tagline-input">
          <InputLabel htmlFor="my-input">Update tagline</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        
        <span className="delete-save">
        <Button confirm onClick={() => { console.log('save') }}>
          Save
        </Button>
        <Button cancel onClick={() => { console.log('Delete') }}>
          Delete
        </Button>
        </span>
        </div>

      
    </div>
  );

}