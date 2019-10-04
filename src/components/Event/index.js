import React    from 'react';

import List     from 'components/Event/List';
import Show     from 'components/Event/Show';
import Form     from 'components/Event/Form';
import Status   from 'components/Event/Status';
import Confirm  from 'components/Event/Confirm';
import Error    from 'components/Event/Error';

import 'components/Event/styles.scss';

const LIST          = "LIST";
const SHOW          = "SHOW";
const CREATE        = "CREATE";
const SAVING        = "SAVING";
const DELETING      = "DELETING";
const CONFIRM       = "CONFIRM";
const EDIT          = "EDIT";
const ERROR_SAVE    = "ERROR_SAVE";
const ERROR_DELETE  = "ERROR_DETELE";


export default function Event(props) {

  // dummy code to satisfy mode/transition requirement
      const mode = mode => {
        console.log(mode);
      };
      const transition = transition => {
        console.log(transition);
      };
  // be sure to delete the above code

  return (
    <article className="event">
      <List />

      {/* ON JOIN IS A PUT REQUEST WITH YOUR ID */}
      {mode === LIST && <List onJoin={} />}

      {mode === SHOW && <Show />}

      {mode === CREATE && (
        <Form
          onSave={save}
          onCancel={back}
        />
        )}

{/* 
      {mode === LIST && <List />}

      {mode === SAVING && (
        <Status message="Saving..." />
      )}

      {mode === DELETING && (
        <Status message="Deleting..." />
      )}

      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          // onCancel={back}
          // onConfirm={destroy}
        />
      )}

      {mode === EDIT && (
        <Form
          // onSave={save}
          // onCancel={back}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error 
          message="Could not cancel event."
          // onClose={back}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error 
          message="Could not save event."
          // onClose={back}
        />
      )} */}

    </article>
  )
};