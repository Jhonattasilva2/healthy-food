import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">Healthy Food</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="#recipes">HEALTHY RECIPES</MenuLink>
        <MenuLink href="#blog">BLOG</MenuLink>
        <MenuLink href="#join">JOIN</MenuLink>
        <RegisterLink to="/register">REGISTER</RegisterLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  font-family: "Muli", sans-serif;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: #fafafc;
    text-decoration: none;
  }

  @media (max-width: 1060px) {
    width: 100%;
    &:hover {
      background-color: #fff;
      color: #badc58;
    }
  }
`;

const RegisterLink = styled(Link)`
  font-family: "Muli", sans-serif;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #BADC58;
  transition: all 0.3s ease-in;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #FFF;
  &:hover {
    background-color: #FAFAFC;
    text-decoration: none;
  }

  @media (max-width: 1060px) {
    width: 100%;
    border-radius: 0;
    color: #BADC58;
    &:hover {
      background-color: #BADC58;
      color: #FFF;
    }
  }
`;

const Nav = styled.div`
  height: 103px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: #badc58;
  margin: auto 105px;
  font-weight: bold;

  &:hover {
    text-decoration: none;
    color: #badc58;
  }


  @media (max-width: 540px) {
    display: none;
  }
`;

const Menu = styled.div`
  right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1060px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color: rgba(51, 170, 51, 0.5);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1060px) {
    display: flex;
  }
`;
