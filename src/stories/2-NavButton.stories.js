import React from "react";
import NavButton from "components/Navbar/NavButton";
import { action } from "@storybook/addon-actions";
import NavBarFinal from "components/Navbar/NavBarFinal";


export default {
  title: "NavigationBar"
};

export const Register = () => (
  <NavButton confirm onClick={action("clicked")}>
    Register
  </NavButton>
);

export const SignIn = () => (
  <NavButton confirm onClick={action("clicked")}>
    Sign In
  </NavButton>
);

export const Profile = () => (
  <NavButton confirm onClick={action("clicked")}>
    Profile
  </NavButton>
);

export const LogOut = () => (
  <NavButton cancel onClick={action("clicked")}>
    Log Out
  </NavButton>
);

export const FinalNavBar = () => (
  <NavBarFinal></NavBarFinal>
);