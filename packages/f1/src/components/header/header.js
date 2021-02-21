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
          <Image />
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
  color: var(--black);
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;
const Image = styled.div`
  background-image: url("https://github.com/edgarrincon/pisodeportivo/blob/main/packages/f1/src/components/imagenes/logo.png?raw=true");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 75px;
  height: 75px;
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
  align-items: center;
  color: var(--black);
  transition: all 0.3s ease;
  &:hover {
    color: var(--white);
  }
`;
