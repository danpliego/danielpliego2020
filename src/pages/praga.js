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
      name="Praga &amp; Berlin Real Estate Themess"
      subtitle="2019 - UI Design, Front End"
      description={
        <>
          <p>
            While working as a full-time employee in EasyBroker, I was
            commissioned to design two templates for the platform’s website
            builder.
          </p>
          <p>
            The biggest challenges for these designs were that the website
            builder uses partials shared across all the other templates so I
            didn’t have a lot of liberty to propose new elements, more than
            designing with what already exists. Also, I had to design with
            variable content, and really think about how something will look if
            is empty or if it has a lot of information.
          </p>
          <p>
            <strong>Praga:</strong> The concept for this theme was based on some
            of the high-end clients that sell luxury properties and wanted a
            more elegant and clean vibe for their website; I achieve this result
            by creating a contrast between strong serif fonts and grotesque
            sans-serifs, a contrast between black and beige colors and a lot of
            whitespace.
          </p>
          <p>
            <strong>Berlin:</strong> Berlin was meant to become the default
            theme for your website, so we needed a very flexible,
            easy-to-customize and clean design. For this design, we opted for
            using huge and bold Circular font titles, remove the lines for
            almost all dividers and use white-space instead.
          </p>
        </>
      }
    >
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Praga1} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Praga2} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Praga3} />
        </ProjectColumn>
      </Comp.Row>
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Praga4} />
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
