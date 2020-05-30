import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false, 
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {

    const element = <FontAwesomeIcon icon={faBell} size="2x" />;
    return (
      <NavItem className=" dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            {element}
            <Badge pill theme="danger">
              5
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">{element}</div>
            </div>
            <div className="notification__content">
              <span className="notification__category">completed courses</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">{element}</div>
            </div>
            <div className="notification__content">
              <span className="notification__category">progress</span>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
           Show All
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
