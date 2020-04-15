import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import Menu from "./menu";
import { Link } from "gatsby";

const ArrowLeft = require("../images/arrow-left.svg");

interface ProjectLayoutProps {
  name: string;
  subtitle: string;
  description: JSX.Element;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  description,
  subtitle,
  children
}) => {
  return (
    <Comp.Container>
      <Menu />
      <ProjectHero mobile>
        <Comp.Column>
          <HeroContent>
            <h1>{name}</h1>
            <p>{subtitle}</p>
          </HeroContent>
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
    font-size: 3rem;
  }

  p {
    font-size: 0.9rem;
  }

  > div {
    flex: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 75%;
`;

export const ProjectColumn = styled(Comp.Column)`
  margin-bottom: 2rem;
`;

const ProjectFooter = styled.div`
  padding: 3rem 0;
  text-align: center;
`;
