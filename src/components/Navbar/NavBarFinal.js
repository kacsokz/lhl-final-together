import React from "react";

import "components/Navbar/NavButton.scss";
import "components/Navbar/NavBar.scss";
import queryString from 'query-string'
import NavBar from "components/Navbar/NavBar";
import LinkedInBtn from "./LinkedInBtn";

export default function NavBarFinal(props) {
   // const username = window.location.search.replace("?username=", "")
   let id = queryString.parse(window.location.search.replace("?user_id=", ""))
   // console.log(id['user_id'])

   // let mode = id ? "LOGGEDOUT" : "LOGGEDIN";
   // let mode = username ? "LOGGEDIN" : "LOGGEDOUT";
   
   let mode = "LOGGEDOUT";

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
    action1= {() => console.log("MeProfile")}
    action2= {() => console.log("LogMeOut")}
    />
   )}
   </div>
   )
}

// {mode === ERROR_SAVE && (
//    <Error
//    message="Error saving interview"
//    onClose={() => back()}
//    />
//  )}