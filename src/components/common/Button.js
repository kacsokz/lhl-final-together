import React from "react";
import "components/Common/Button.scss";
import classnames from 'classnames/bind';

export default function Button(props) {
   const buttonClass = classnames("button", {
      "button--confirm text--body": props.confirm,
      "button--cancel text--body": props.cancel
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