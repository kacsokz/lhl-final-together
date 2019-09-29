import React from "react";

export default function Status(props) {
  return (
    <main className="event__card event__card--status">
      <img
        className="event__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1>{props.message}</h1>
    </main>
  );
};