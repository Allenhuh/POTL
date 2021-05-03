import React from "react";
import logo from '../../assets/img/logo.svg';
import '../../assets/css/nav.css';
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function NavBar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
    <div className="nav-background">
<img src={logo} className="App-logo" alt="logo" />
<header className="app-text"> P . O . T . L </header>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" >Lost Pets</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Blog</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Poster Builder</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Donation</a>
  </li>
</ul>
</div>
    </>
  );
}

export default NavBar