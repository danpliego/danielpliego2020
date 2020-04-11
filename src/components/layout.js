import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GlobalStyle } from "./globalStyle";
import * as Comp from "./layoutComponents";
import Footer from "./footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Comp.MainWrapper>
            <main>{children}</main>
            <Footer />
          </Comp.MainWrapper>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
