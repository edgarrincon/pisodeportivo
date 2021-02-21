import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <BrandContainer>
        <StyledLink link="/">
          <Img></Img>
          <Title>
            <span>PISO DEPORTIVO</span>
          </Title>
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const Img = styled.div`
  margin: 0;
  width: 50px;
  height: 50px;
  background-image: url("../imagenes/Logo-de-Piso-Deportivo-con-el-fondo-transparente.png");
  background-repeat: no-repeat;
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  color: var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color: var(--black);
  }
`;
