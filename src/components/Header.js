import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class Header extends React.Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mico</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/products">
              <NavItem eventKey={1}>Products</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Shop by category" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Apparel</MenuItem>
              <MenuItem eventKey={3.2}>Electronics</MenuItem>
              <MenuItem eventKey={3.3}>Groceries</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Checkout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;