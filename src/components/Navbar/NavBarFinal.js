import React from "react";

import "components/Navbar/NavButton.scss";
import "components/Navbar/NavBar.scss";
import NavBar from "components/Navbar/NavBar";

export default function NavBarFinal(props) {
   let mode = "LOGGEDOUT";
   

   return (
      <div>
      {mode === "LOGGEDOUT" && (
    <NavBar
    user1="Register"
    user2="Log In"
    action1= {() => console.log("RegisterMe")}
    action2= {() => console.log("LogMeIn")}
    />
   )}
   {mode === "LOGGEDIN" && (
    <NavBar
    user1="Profile"
    user2="Log Out"
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