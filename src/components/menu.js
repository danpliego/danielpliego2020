import React from "react";
import { FlexContainer, FlexAlignChild } from "./layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../images/logo.svg";
import Dribbble from "../images/dribbble.svg";
import Linkedin from "../images/linkedin.svg";

const Menu = () => (
  <MenuContainer>
    <Link to="/">
      <img src={Logo} />
    </Link>
    <MenuRight>
      <MenuItem to="/">Work</MenuItem>
      <MenuItem to="/">About Me</MenuItem>
      <MenuItem to="/">Español</MenuItem>
      <MenuItem to="/">
        <img src={Dribbble} />
      </MenuItem>
      <MenuItem to="/">
        <img src={Linkedin} />
      </MenuItem>
    </MenuRight>
  </MenuContainer>
);
export default Menu;

const MenuContainer = styled(FlexContainer)`
  padding: 3rem 0;
`;

export const MenuRight = styled(FlexAlignChild)`
  position: relative;

  -webkit-filter: url("#filter");
  filter: url("/#filter");

  &:before {
    content: " ";
    width: 3rem;
    height: 1px;
    background: #000;
    position: absolute;
    left: -3rem;
  }
`;
export const MenuItem = styled(Link)`
  padding: 1rem;
  display: block;
  transition: all 0.15s ease-in-out;

  &:hover {
    text-decoration: line-through;
    transform: translate(0px, -3px);
  }
`;
