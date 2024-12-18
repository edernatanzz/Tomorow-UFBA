// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 4rem;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff);
  border-bottom: 4px solid #a855f7;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 0 1rem;
`
;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #1f2937;
`;

const Nav = styled.nav`
  display: flex;
  gap:3rem;
`;

const NavLink = styled.a`
  color: #1f2937;
  font-weight: 500;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    color: #a855f7;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Logo>Logo</Logo>
        <Nav>
          <NavLink href="#">Register</NavLink>
          <NavLink href="#">Login</NavLink>
          <button>cart</button>
        </Nav>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
