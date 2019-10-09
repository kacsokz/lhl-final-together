import React from "react";
import "components/Navbar/NavButton.scss"

export default function NavButton(props) {

   return (
      <button
         className="nav_button text--body"
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
};
