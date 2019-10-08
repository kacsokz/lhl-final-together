import "components/Navbar/NavBar.scss";
import "components/Navbar/NavButton.scss";
import React         from "react";
import NavBar        from "components/Navbar/NavBar";
import LinkedInBtn   from "./LinkedInBtn";
import queryString   from 'query-string';


export default function NavBarFinal(props) {

   let id = queryString.parse(window.location.search).user_id

   // let mode = id ? "LOGGEDIN" : "LOGGEDOUT";
   let mode = "LOGGEDIN";


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
};
