import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const EasyBroker1 = require("../images/projects/ebapp/ebapp-1.jpg");
// eslint-disable-next-line
const EasyBroker2 = require("../images/projects/ebapp/ebapp-2.jpg");
// eslint-disable-next-line
const EasyBroker3 = require("../images/projects/ebapp/ebapp-3.jpg");

const IndexPage = () => (
  <Layout>
    <SEO
      title="EasyBroker Nativa App"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <ProjectLayout
      name="EasyBroker Native App"
      subtitle="2018 - UX, UI Design in collab with in-house team"
      description={
        <>
          <p>
            While working as a product designer our CEO decided to do a complete
            revamp of the EasyBroker App, the previous version was using a lot
            of web views to display the mobile version of the web platform but
            our clients felt the experience not native and also there were a lot
            of weird bugs.
          </p>
          <p>
            In this project, my role was to work side by side with the product
            manager and the lead developer to plan, design and build the
            front-end components for the app.
          </p>
          <p>
            We started the project by learning all about iOS and Android best
            practices, and also discussing the development constrains and easy
            way to develop the app, given that we were a small team.
          </p>
          <p>
            We ended creating a component system in Figma, to reuse forms,
            button groups and option selectors, and then design the whole
            platform and iterate over these components. The finished design has
            a very clean look and feel to make the listing images stand out, and
            make easy to find and navigate across all the options, features and
            forms.
          </p>
        </>
      }
    >
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={EasyBroker1} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={EasyBroker2} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={EasyBroker3} />
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
