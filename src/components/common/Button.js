import React from "react";
import "components/Common/Button.scss";
import classnames from 'classnames/bind';

export default function Button(props) {
   const buttonClass = classnames("button", {
      "button--confirm": props.confirm,
      "button--cancel": props.cancel
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