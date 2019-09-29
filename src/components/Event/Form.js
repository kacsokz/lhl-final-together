import React from 'react';
import Button from 'components/Button';

export default function Form(props) {

  const validate = () => {

  };

  const cancel = () => {

  };

  return (
    <main className="event__card event__card--create">

      <section className="event__actions">
        <Button
          confirm
          onClick={validate}
        >
          Confirm
        </Button>
        <Button
          cancel
          onClick={cancel}
        >
          Cancel
        </Button>
      </section>
    </main>
  );
};
