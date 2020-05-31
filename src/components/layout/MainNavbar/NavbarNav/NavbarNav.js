import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notifications from "../NavbarNav/Notifications";
import UserActions from "../NavbarNav/UserActions";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from "shards-react";

export default class NavbarNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar type="dark" theme="secondary" expand="md">
        <NavbarBrand href="#">Learn ED</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink practise href="#">
              PRACTISE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink complete href="#">
              COMPLETE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink job href="#">
              JOBS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink leaderboard href="#">
              LEADERBOARD
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar className="m-auto">
          <InputGroup size="lg" seamless>
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput className="border-0" placeholder="Search..." />
          </InputGroup>
        </Nav>

        <Nav navbar className="m-auto">
          <Notifications />
        </Nav>
          <Nav navbar className="m-auto">
          <UserActions />
          </Nav>
       
      </Navbar>
    
    );
  }
}
