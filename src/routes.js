import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "../src/layouts";

// Route Views
import LearningOverview from "../src/views/LearningOverview";
import MainNavBar from "../src/components/layout/MainNavbar/MainNavbar";
import UserProfile from "../src/views/UserProfile";



export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/learning-overview" />,
  },
  {
    path: "/learning-overview",
    layout: DefaultLayout,
    component: LearningOverview,
  },
  {
    path: "/main-navBar",
    layout: DefaultLayout,
    component: MainNavBar,
  },

  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile,
  },
];
