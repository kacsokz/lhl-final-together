import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  bigAvatar: {
    marginLeft: 200,
    width: 100,
    height: 100,
  },
});

export default function UserAvatar(props) {
  const classes = useStyles();

  return (
      <Avatar
        alt="Avatar"
        src={props.src}
        className={classes.bigAvatar}
      />
  );
}
