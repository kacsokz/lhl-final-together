import React from "react";

import EventListItem from 'components/Event/EventListItem/index';
import EventListItemHeader from 'components/Event/EventListItem/Header';

export default function List(props) {
  return (
    <>
      <EventListItemHeader />
      <EventListItem />
    </>
  );
};