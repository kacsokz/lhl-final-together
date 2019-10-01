import React from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Button from "components/common/Button";
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
      <Avatar alt="Avatar" src={props.avatar} className={classes.bigAvatar} />
      <div className="user-details"><h3>{props.first_name}</h3></div>
      <div className="user-details"><h3>{props.last_name}</h3></div>
      <div className="user-details"><h3>{props.tag_line}</h3></div>
      <div className="tagline">
        <FormControl className="tagline-input">
          <InputLabel htmlFor="my-input">Update tagline</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>

        <span className="delete-save">
          <Button confirm onClick={props.onConfirm}>
            Save
        </Button>
          <Button cancel onClick={props.onDelete}>
            Delete
        </Button>
        </span>
      </div>
    </div>
  );
}