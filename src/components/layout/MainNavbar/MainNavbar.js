import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NavBarNav from "../MainNavbar/NavbarNav/NavbarNav";
import LearningOverview from "../../../views/LearningOverview";

const MainNavbar = ({stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
        <NavBarNav /> 
        <LearningOverview />
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool,
};

MainNavbar.defaultProps = {
  stickyTop: true,
};

export default MainNavbar;
