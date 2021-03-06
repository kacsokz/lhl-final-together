import "components/Navbar/NavBar.scss";
import "components/Navbar/NavButton.scss";
import React      from "react";
import NavButton  from "components/Navbar/NavButton";

export default function NavBar(props) {

   return (
      <section className="topbar">
         <img
            onClick={() => props.homeView()}
            className="topbar__together"
            src="images/Logo_TogetherW.png"
            alt="Together"
         />
         {props.user1 ? (
            <div>
               <NavButton
                  onClick={props.action1}
               >{props.user1}</NavButton>
               <NavButton
                  onClick={props.action2}
               >{props.user2}</NavButton>
            </div>
         ) : props.children}
      </section>
   );
};
