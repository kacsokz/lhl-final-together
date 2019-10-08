import React from "react";
import "components/Common/Button.scss";
import classnames from 'classnames/bind';

export default function Button(props) {
   const buttonClass = classnames("button", {
      "button--red text--body": props.red,
      "button--blue text--body": props.blue,
      "button--nav text--body": props.nav
   });

   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
};