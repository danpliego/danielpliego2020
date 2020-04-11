import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import Menu from "./menu";
import { Link } from "gatsby";

const ArrowLeft = require("../images/arrow-left.svg");

interface ProjectLayoutProps {
  name: string;
  description: JSX.Element;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  description,
  children
}) => {
  return (
    <Comp.Container>
      <Menu />
      <ProjectHero mobile>
        <Comp.Column>
          <h1>{name}</h1>
        </Comp.Column>
        <Comp.Column>{description}</Comp.Column>
      </ProjectHero>
      {children}
      <ProjectFooter>
        <Link to="/#work">
          <img src={ArrowLeft} style={{ marginRight: "1rem" }} />
          Go back to projects
        </Link>
      </ProjectFooter>
    </Comp.Container>
  );
};

const ProjectHero = styled(Comp.Row)`
  padding: 11rem 0 6rem;

  h1 {
    max-width: 75%;
  }

  > div {
    flex: 1;
  }
`;

export const ProjectColumn = styled(Comp.Column)`
  margin-bottom: 2rem;
`;

const ProjectFooter = styled.div`
  padding: 3rem 0;
  text-align: center;
`;
