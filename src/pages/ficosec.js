import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Ficosec1 = require("../images/projects/ficosec/ficosec-1.jpg");
// eslint-disable-next-line
const Ficosec2 = require("../images/projects/ficosec/ficosec-2.jpg");
// eslint-disable-next-line
const Ficosec3 = require("../images/projects/ficosec/ficosec-3.jpg");

const IndexPage = () => (
  <Layout>
    <SEO title="Ficosec App" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="Ficosec App"
      subtitle="2019 - Design Sprints, UX, UI Design, and User Testing"
      description={
        <>
          <p>
            Last year I was hired by JaxiTank to help them develop a platform
            for Ficosec. Ficosec is in charge of managing and giving funds in
            support programs to improve security and social issues in Mexico.
          </p>
          <p>
            The challenge was to create a platform for a business owner or ONG
            to apply, and also build an admin for the Ficosec employees to
            manage all of the stages of a project, and review, accept or decline
            them.
          </p>
          <p>
            The team flew to the Ficosec offices in Juarez City to do a 3-day
            design workshop to define the features that they needed in the
            product, and clear all the questions and constrains from them. Then
            I worked developing a prototype using Sketch and Invision for the
            development team to build, this process user testing with the
            Ficosec team. The challenge was to build a platform with a lot of
            features and forms, without losing consistency, easiness to
            implement and a clean and understandable design.
          </p>
          <p>
            I created a design system based on material design specs, a strong
            typography hierarchy and a clean color palette with only a few
            accent colors.
          </p>
        </>
      }
    >
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Ficosec1} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Ficosec2} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Ficosec3} />
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
