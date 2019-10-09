import "components/Navbar/NavBar.scss";
import NavBar from "components/Navbar/NavBar";
import LinkedInBtn from "./LinkedInBtn";
import "components/Navbar/NavButton.scss";
import React         from "react";

export default function NavBarFinal(props) {

   // let id = queryString.parse(window.location.search).user_id

   let mode = props.userId ? "LOGGEDIN" : "LOGGEDOUT";

   return (
      <div>
         {mode === "LOGGEDOUT" && (
            <NavBar>
               <LinkedInBtn/>
            </NavBar>
         )}

         {mode === "LOGGEDIN" && (
            <NavBar
               user1="Profile"
               user2="Log Out"
               //onClick render profile component
               action1= {props.action}
               action2= {props.logout}
            />
         )}
      </div>
   )
};
