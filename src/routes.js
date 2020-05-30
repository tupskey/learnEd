import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "../src/layouts";

// Route Views
//import NavbarNav from "./components/layout/MainNavbar/NavbarNav/NavbarNav";
//import UserActions from "./components/layout/MainNavbar/NavbarNav/UserActions";
//import TransactionOverview from "../src/views/TransactionOverview";
import UserProfile from "../src/views/UserProfile";
import MainNavBar from "../src/components/layout/MainNavbar/MainNavbar";



export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/MainNavBar" />,
  },
  {
    path: "/MainNavBar",
    layout: DefaultLayout,
    component: MainNavBar,
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile,
  },
];
