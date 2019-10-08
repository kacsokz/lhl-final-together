import React from "react";

import "components/Navbar/NavButton.scss";
import "components/Navbar/NavBar.scss";
import queryString from 'query-string'
import NavBar from "components/Navbar/NavBar";
import LinkedInBtn from "./LinkedInBtn";

export default function NavBarFinal(props) {

   let id = queryString.parse(window.location.search).user_id

   let mode = id ? "LOGGEDIN" : "LOGGEDOUT";


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
    action2= {() => console.log("LogMeOut")}
    />
   )}
   </div>
   )
}