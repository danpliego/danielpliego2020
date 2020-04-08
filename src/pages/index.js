import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Comp from "../components/layoutComponents";
import Hero from "../components/hero";
import { Proyectos } from "../components/proyectos";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Comp.Container>
      <Menu />
      <Hero />
      <Proyectos />
    </Comp.Container>
  </Layout>
);

export default IndexPage;
