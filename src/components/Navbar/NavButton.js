import React from "react";

import "components/Navbar/NavButton.scss";
import classnames from 'classnames/bind';

export default function NavButton(props) {
   const buttonClass = classnames("Navbutton", {
      "Navbutton--confirm": props.confirm,
      "Navbutton--cancel": props.cancel
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