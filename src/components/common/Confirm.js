import React from "react";
import Button from "components/Common/Button";
import "components/Common/styles.scss";

export default function Confirm(props) {
  return (
    <main className="event_card event_card--confirm">
      <h1>{props.message}</h1>
      <section className="event__actions">
        <Button
          confirm
          onClick={props.onConfirm}
        >
          Confirm
        </Button>
        <Button
          cancel
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </section>
    </main>
  );
};