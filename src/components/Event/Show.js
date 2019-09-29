import React from "react";

export default function Show(props) {
  return (
    <main className="event__card event__card--show">

      <section className="event__actions">
        <img
          className="event__actions-button"
          src="public/images/add.png"
          alt="Join"
          onClick={props.onJoin}
        />
      </section>

    </main>
  );
};