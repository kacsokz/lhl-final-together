import React from "react";

import "components/Navbar/NavButton.scss";
import classnames from 'classnames/bind';
import Button from "components/Common/Button";

export default function NavButton(props) {
   const buttonClass = classnames("Navbutton", {
      "Navbutton--logout": props.logout,
      "Navbutton--profile": props.profile
   });

   return (
      <a
         className={buttonClass}
         href="http://localhost:3000/auth/linkedin"
         onClick={props.onClick}
      >
         {props.children}
      </a>
      // <button
      //    className={buttonClass}
      //    onClick={props.onClick}
      //    disabled={props.disabled}
      // >
      //    {props.children}
      // </button>
   );
};