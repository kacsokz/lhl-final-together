import React from "react";

import "components/Navbar/NavButton.scss";
import classnames from 'classnames/bind';

export default function NavButton(props) {
   const buttonClass = classnames("Navbutton", {
      "Navbutton--confirm": props.confirm,
      "Navbutton--cancel": props.cancel
   });

   return (
      <a
         className={buttonClass}
         href="http://localhost:3000/auth/linkedin"
         onClick={props.onClick}
      >
         {props.children}
      </a>
   );
};