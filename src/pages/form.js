import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Form1 = require("../images/projects/form/form-1.jpg");
// eslint-disable-next-line
const Form2 = require("../images/projects/form/form-2.jpg");
// eslint-disable-next-line
const Form3 = require("../images/projects/form/form-3.jpg");
// eslint-disable-next-line
const Form4 = require("../images/projects/form/form-4.jpg");

const IndexPage = () => (
  <Layout>
    <SEO title="Form Kitchens" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="Form Kitchens Landing &amp; App"
      subtitle="2019 - UX, UI Design in collab with in-house team"
      description={
        <>
          <p>
            The past year I worked as an implant designer in Form Kitchens, we
            worked on 3 big projects together, define the brand values and
            visual identity for their first product launch, developing a website
            to market their product, and building a web app to design and order
            a kitchen completely online.
          </p>
          <p>
            The idea behind all this project was to build a raw MVP for
            everything that we can test with users, start selling and then
            improve the design with the user&apos;s feedback. The CEO was very
            practical and needed a system that can be applied to a website, user
            and admin platform in the easiest way possible.
          </p>
          <p>
            My initial approach for this project was to define a small brand
            manual with just colors, typography rules and basic design
            guidelines; then create a full UI system in Figma to be able to
            design screens very fast, then we worked on building the first
            prototype of the user platform, a landing page and the admin
            platform.
          </p>
        </>
      }
    >
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Form1} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Form2} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Form3} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Form4} />
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
