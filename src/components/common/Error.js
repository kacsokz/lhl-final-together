import React from "react";
import "components/Common/styles.scss";

export default function Error(props) {
  return (
    <main className="common__card">
      <section className="common__card--outline">
        <img
          className="common__card--error-img"
          src="images/close.png"
          alt="Close"
          onClick={props.onClose}
        />
        <section className="event-message">
          <h1 className="text--body">ERROR</h1>
          <h3 className="text--body">{props.message}</h3>
        </section>
      </section>
    </main>
  );
};
