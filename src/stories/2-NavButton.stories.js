import React from "react";
import NavButton from "components/Navbar/NavButton";
import { action } from "@storybook/addon-actions";
import NavBarFinal from "components/Navbar/NavBarFinal";
import LinkedInBtn from "components/Navbar/LinkedInBtn";


export default {
  title: "Navigation Bar"
};

export const Profile = () => (
  <NavButton style onClick={action("clicked")}>
    Profile
  </NavButton>
);

export const LogOut = () => (
  <NavButton style onClick={action("clicked")}>
    Log Out
  </NavButton>
);

export const LinkedinButton = () => (
  <LinkedInBtn></LinkedInBtn>
);

export const NavigationBar = () => (
  <NavBarFinal></NavBarFinal>
);