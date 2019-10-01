import React from "react";

import "components/Navbar/NavButton.scss";
import "components/Navbar/NavBar.scss";
import NavBar from "components/Navbar/NavBar";
import classnames from 'classnames/bind';



export default function NavBarFinal(props) {
   let mode = "LOGGEDOUT";
   

   return (
      <div>
      {mode === "LOGGEDOUT" && (
    <NavBar
    user1="Register"
    user2="Log In"
    />
   )}
   {mode === "LOGGEDIN" && (
    <NavBar
    user1="Profile"
    user2="Log Out"
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