import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/common/Button";
import EventListItem from "components/User/eventListItem";
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

export default function EventsList(props) {

  const classes = useStyles();
  const eventsList = props.events.map((event) => (
    <EventListItem
      id={event.id}
      name={event.name}
      start_time={event.start_time}
      end_time={event.end_time}
      onEdit={props.onEdit}
      onDelete={props.onDelete}
      viewEvent={props.viewEvent}
    />
  ));
  return (
    <div className="event-container">
      <Avatar alt="Avatar" src={props.avatar} className={classes.bigAvatar} />
      <h4 className="my-event">Events</h4>
      <div className="events-list">
        {eventsList}
      </div>
      <span className="create-event">
        <Button confirm onClick={props.onCreate}>
          Create
        </Button>
      </span>
    </div>
  );

}