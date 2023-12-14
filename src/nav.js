import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin: 0 1rem;
`;

const Logo = styled.h1`
  margin: 0;
`;

const NavigationBar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/about">About</Link>
        </NavLink>
        <NavLink>
          <Link to="/contact">Contact</Link>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavigationBar;