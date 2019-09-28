import React from 'react';

import List from 'components/Event/List';
import Show from 'components/Event/Show';
import Form from 'components/Event/Form';
import Status from 'components/Event/Status';
import Confirm from 'components/Event/Confirm';
import Error from 'components/Event/Error';

import 'components/Event/styles.scss';

const LIST = "LIST";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DETELE";


export default function Event(props) {

  return (
    <article className="event">
      <List />
      
{/* 
      {mode === LIST && <List />}

      {mode === SHOW && <Show />}

      {mode === CREATE && <Form />}

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
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          // onSave={save}
          // onCancel={back}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error 
          message="Could not cancel appointment."
          // onClose={back}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error 
          message="Could not save appointment."
          // onClose={back}
        />
      )} */}

    </article>
  )
};