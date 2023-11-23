import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import Logo from './../image/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:400,700'],
  },
});

const Footer = () => {
  const navigate = useNavigate(); // useNavigate 함수를 사용합니다.
  const location = useLocation(); // 현재 경로를 얻기 위해 useLocation hook 사용
  const [showMainNav, setShowMainNav] = useState(false);

  useEffect(() => {
    // 페이지가 새로고침 되면 현재 경로에 따라 showMainNav 상태를 설정합니다.
    if (location.pathname.includes('/aipin')) {
      setShowMainNav(true);
    } else {
      setShowMainNav(false);
    }
  }, [location]); // location이 변경될 때마다 재실행

  // 메인 홈으로 이동
  const goToHome = () => {
    setShowMainNav(false);
    navigate('/');
  };

  // aipin 페이지로 이동
  const goToAipin = () => {
    setShowMainNav(true);
    navigate('/aipin');
  };

  return (
    <FooterWrapper>
      <div className="brand">
        <Image src={Logo} alt="Logo" />
      </div>
      <Nav show={!showMainNav}>
        {/* 세컨드 Navigation 링크 */}
        <NavButton onClick={() => goToAipin()}>ai pin</NavButton>
        <NavLink href="shop">shop</NavLink>
        <NavLink href="/about-us">about us</NavLink>
        <NavLink href="/support">support</NavLink>
        <NavLink href="/account">account</NavLink>
      </Nav>
      <Nav show={showMainNav}>
        {/* 메인 Navigation 링크 */}
        <NavButton onClick={() => goToHome()}>
          <IoIosArrowBack />
          menu
        </NavButton>
        <NavLink>ai pin</NavLink>
        <NavLink href="/trust">trust</NavLink>
        <NavLink href="/cosmos">cosmos</NavLink>
        <NavLink href="/tech-details">tech details</NavLink>
      </Nav>
    </FooterWrapper>
  );
};

export default Footer;

const Image = styled.img`
  height: 30px;
`;

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
  position: fixed;
  bottom: 0;
  width: 98%;
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  font-size: larger;
  right: 0;
  margin: auto;
  justify-content: center;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

const NavLink = styled.a`
  color: #4b4b4b;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: larger;
  margin-right: 15px;
  padding-bottom: 3px;
  &:hover {
    color: white;
    transition: 0.5s;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #4b4b4b;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: larger;
  margin: 0 10px;
  margin-right: 15px;
  &:hover {
    color: white;
    transition: 0.5s;
  }
`;
