import React from "react";
import "components/Common/styles.scss";

export default function Status(props) {
  return (
    <main className="common__card">
      <section className="common__card--outline">
        <img
          className="status-image"
          src="images/status.png"
          alt="Loading"
        />
        <h1 className="text--body">{props.message}</h1>
      </section>
    </main>
  );
};