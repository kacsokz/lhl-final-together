import React from "react";


import "components/Navbar/NavButton.scss";
import "components/Navbar/NavBar.scss";
import NavButton from "components/Navbar/NavButton";

export default function NavBar(props) {
   

   return (
    <section className="topbar">
    <img
      className="topbar__together"
      src="images/Logo_TogetherW.png"
      alt="Together"
    />
    {props.user1 ? (
    <div>
    <NavButton style onClick={props.action1}>{props.user1}</NavButton>
    <NavButton style onClick={props.action2}>{props.user2}</NavButton>
    </div>) : props.children}
</section>
   );
};