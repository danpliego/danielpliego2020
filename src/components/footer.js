import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <BodyFooter>
        © {new Date().getFullYear()}, Ramiro Mendoza Arquitecto
      </BodyFooter>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: red;
`;

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  font-size: 0.8rem;
  border-top: 1px solid ${theme.colors.primaryColor};
`;

export default Footer;
