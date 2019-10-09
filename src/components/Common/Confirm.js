import React from "react";
import Button from "components/Common/Button";
import "components/Common/styles.scss";

export default function Confirm(props) {
  return (
    <main className="common__card">
      <section className="common__card--outline">
        <h1 className="text--body">{props.message}</h1>
        <section className="common__card--confirm-cc">
          <Button
            blue
            onClick={props.onCancel}
          >
            Cancel
          </Button>
          <Button
            red
            onClick={() => props.onConfirm(props.event.event_id)}
          >
            Confirm
          </Button>
        </section>
      </section>
    </main>
  );
};