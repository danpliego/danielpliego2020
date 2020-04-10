import React from "react";
import { FlexAlignChild } from "./layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../images/logo.svg";
import Dribbble from "../images/dribbble.svg";
import Linkedin from "../images/linkedin.svg";

const Menu = () => (
  <MenuContainer>
    <LogoContainer>
      <Link to="/">
        <img src={Logo} />
      </Link>
    </LogoContainer>
    <MenuRight>
      <MenuItem to="#work">Work</MenuItem>
      <MenuItem to="#about">About Me</MenuItem>
      <MenuItem as="a" href="mailto:danielpliego@gmail.com">
        Contact
      </MenuItem>
      {/* <MenuItem to="/">Español</MenuItem> */}
      <MenuItem as="a" href="https://dribbble.com/danpliego" target="_blank">
        <img src={Dribbble} />
      </MenuItem>
      <MenuItem
        as="a"
        href="https://www.linkedin.com/in/daniel-pliego-183bbb53/"
        target="_blank"
      >
        <img src={Linkedin} />
      </MenuItem>
    </MenuRight>
  </MenuContainer>
);
export default Menu;

const MenuContainer = styled(FlexAlignChild)`
  padding: 1.7rem 0;
  position: fixed;
  z-index: 1;
  width: 100%;
  max-width: 1190px;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

export const MenuRight = styled(FlexAlignChild)`
  position: relative;

  &:before {
    content: " ";
    position: absolute;
    width: 3rem;
    height: 1px;
    background: #000;
    left: -4rem;
  }
`;
export const MenuItem = styled(Link)`
  padding: 1rem 1.5rem;
  display: block;
  transition: all 0.15s ease-in-out;

  &:hover {
    text-decoration: line-through;
    transform: translate(0px, -1px);
  }
`;
