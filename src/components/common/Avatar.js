import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

export default function UserAvatar() {
  const classes = useStyles();

  return (
      <Avatar
        alt="Avatar"
        src="https://media.licdn.com/dms/image/C5603AQFUiMn0YgEGvQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=pfCRLAtRZ0Pj6HlofNazjfwg-oEuH3mxf1TTM1gStgQ"
        className={classes.bigAvatar}
      />
  );
}
