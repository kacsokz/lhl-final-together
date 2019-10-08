import React from "react";


export default function LinkedInBtn(props) {


   return (
      <a
      href="https://together-lhl-api.herokuapp.com/auth/linkedin/callback">
      <img
      className="topbar__linkedIn"
      src="images/LinkedIn--Default.png"
      alt="LinkedInDefault"
      // onClick={props.onClick}
    />
    </a>
   );
};