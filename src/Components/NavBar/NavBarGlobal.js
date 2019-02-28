import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//import Link from './Link';
const GlobalNav = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };
  const toggleDropdown = () => {
    setDropDownOpen(!dropdownOpen);
  };

  return (
    <Navbar color="light" light expand="md" className={className}>
      <Link to="/" className="navbar-brand">
        Pacientes
      </Link>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
              Buscar paciente
            </Link>
          </NavItem>
          <NavItem>
            <Link to="" className="nav-link">
              Menu de hoy
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/paciente" className="nav-link">
              Paciente:{' '}
            </Link>
          </NavItem>
          <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle nav caret>
              Agregar
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/paciente/nuevo" className="dropdown-item">
                Paciente
              </Link>
              <Link to="/alimento/nuevo" className="dropdown-item">
                Alimento
              </Link>
              <DropdownItem>Preparación</DropdownItem>
              <DropdownItem>Menu</DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const NavBarGlobal = styled(GlobalNav)`
  background-color: green;
`;
export default NavBarGlobal;
