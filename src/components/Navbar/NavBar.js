import React from "react";

import "components/Navbar/NavButton.scss";
import "components/Navbar/NavBar.scss";
import NavButton from "components/Navbar/NavButton";
import classnames from 'classnames/bind';

export default function NavBar(props) {
   

   return (
    <section className="topbar">
    <img
      className="topbar__together"
      src="images/togetherLogo.png"
      alt="Together"
    />
    <NavButton confirm>{props.user1}</NavButton>
    <NavButton confirm>{props.user2}</NavButton>
</section>
   );
};