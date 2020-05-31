import React from "react";

import {Nav, NavItem, NavLink} from "shards-react";

const Dashboard = () => {
 
  return (
    <div>
        <Nav fill>
          <NavItem>
            <NavLink active href="#">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>Bookmarked Courses</NavItem>
        </Nav>
    </div>
  );
};
export default Dashboard;