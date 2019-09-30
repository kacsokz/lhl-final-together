import React from "react";
import NavButton from "components/Navbar/NavButton";
import { action } from "@storybook/addon-actions";

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
