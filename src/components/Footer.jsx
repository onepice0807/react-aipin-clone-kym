import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const Footer = () => {
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <FooterWrapper>
      <div className="brand">
        <img src="../" alt="Brand Logo" />
      </div>
      <Nav show={!showMainNav}>
        {/* Secondary Navigation Links */}
        <NavButton onClick={() => setShowMainNav(true)}>ai pin</NavButton>
        <NavLink href="/trust">trust</NavLink>
        <NavLink href="/cosmos">cosmos</NavLink>
        <NavLink href="/tech-details">tech details</NavLink>
      </Nav>
      <Nav show={showMainNav}>
        {/* Main Navigation Links */}
        <NavButton onClick={() => setShowMainNav(false)}>
          <IoIosArrowBack />
          menu
        </NavButton>
        <NavLink href="/shop">shop</NavLink>
        <NavLink href="/about-us">about us</NavLink>
        <NavLink href="/support">support</NavLink>
        <NavLink href="/account">account</NavLink>
      </Nav>
    </FooterWrapper>
  );
};

export default Footer;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const FooterWrapper = styled.div`
  background: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  right: 0;
  justify-content: center;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1em;
  margin-right: 15px;
`;
