import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Praga1 = require("../images/projects/praga/praga-1.jpg");
// eslint-disable-next-line
const Praga2 = require("../images/projects/praga/praga-2.jpg");
// eslint-disable-next-line
const Praga3 = require("../images/projects/praga/praga-3.jpg");
// eslint-disable-next-line
const Praga4 = require("../images/projects/praga/praga-4.jpg");

const IndexPage = () => (
  <Layout>
    <SEO title="Praga" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="Praga Real Estate Theme"
      subtitle="UI Design - Front End // 2018"
      description={
        <>
          <p>
            While working as a full-time employee in EasyBroker, I was
            commisioned to design a template for the platform&apos;s website
            builder.
          </p>
          <p>
            The concept for this one was to achieve a more elegant vibe for our
            clients with luxury listings. I achieve this result by creating
            contrast between strong serif fonts and grotesque sans-serifs, a
            beige colors palette and a lot of whitespace.
          </p>
        </>
      }
    >
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Praga1} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectColumn padded>
          <img src={Praga2} />
        </ProjectColumn>
        <ProjectColumn padded>
          <img src={Praga3} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Praga4} />
        </ProjectColumn>
      </Comp.Row>
      <a
        href="https://dribbble.com/shots/6021701-Praga-Real-Estate-Website-Theme/attachments"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Comp.TextCenter>View more screens at dribbble</Comp.TextCenter>
      </a>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
