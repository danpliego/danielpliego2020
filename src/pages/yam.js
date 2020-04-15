import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProjectLayout, ProjectColumn } from "../components/projectLayout";
import * as Comp from "../components/layoutComponents";

// eslint-disable-next-line
const Yam1 = require("../images/projects/yam/yam-1.jpg");

const IndexPage = () => (
  <Layout>
    <SEO title="Yam Festival" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectLayout
      name="Yam Festival"
      subtitle="2018 - UI Design, Front End"
      description={
        <>
          <p>
            This was a very fun project to work with, being myself as a musician
            and being a fan of the artists in this festival, I was delighted to
            be commissioned to design their website.
          </p>
          <p>
            We approached the design as telling a story, the main goal was to
            make clear that this is not only a festival, but is more of a camp
            where you go for 3 days and do a lot of mystic and eco-friendly
            activities.
          </p>
          <p>
            The design solution was to create a one-page website, and as you
            scroll you discover the different activities of the festival, the
            visual design relies strongly upon nature and sea elements but we
            decided to make everything on black and white to give it a
            mystic/luxury look and feel.
          </p>
        </>
      }
    >
      <Comp.Row padded>
        <ProjectColumn padded>
          <img src={Yam1} />
        </ProjectColumn>
      </Comp.Row>
    </ProjectLayout>
  </Layout>
);

export default IndexPage;
