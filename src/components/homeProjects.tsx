import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";

// eslint-disable-next-line
const Beaubble = require("../images/thumbnails/beaubble.jpg");
const Berbli = require("../images/thumbnails/berbli.jpg");
const Praga = require("../images/thumbnails/praga.jpg");
const DealEngine = require("../images/thumbnails/deal-engine.jpg");

// eslint-disable-next-line
const ArrowRight = require("../images/arrow-right.svg");

export const HomeProjects: React.FC = () => {
  return (
    <>
      <Comp.Row mobile padded>
        <ProjectCard
          image={Beaubble}
          name="Beaubble"
          description="Front-End: React, Styled Components, Storybooks"
          external_url="https://beaubble.com"
        />
        <ProjectCard
          image={Berbli}
          name="Berbli"
          description="Full Project"
          external_url="http://berbli.danielpliego.com/"
        />
        <ProjectCard
          image={Praga}
          name="Praga"
          description="Website theme design"
          external_url="https://dribbble.com/shots/6021701-Praga-Real-Estate-Website-Theme/attachments/1293920"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={DealEngine}
          name="Deal Engine"
          description="Full Project"
          external_url="https://deal-engine.com/"
        />
        <ProjectCard
          image={Beaubble}
          name="Indigo Translations"
          description="Full Project"
          external_url="http://indigotranslations.com.mx/"
        />
        <ProjectCard
          image={Beaubble}
          name="Ramiro Mendoza"
          description="Full Project"
          external_url="http://ramiromendozaarq.com/"
        />
      </Comp.Row>
    </>
  );
};

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  external_url?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  name,
  description,
  external_url
}) => {
  return (
    <>
      <ProjectCardContainer padded>
        {external_url && (
          <ProjectImage>
            <img src={image} />
            <HoverActions href={external_url} target="_blank">
              <span>
                View website <img src={ArrowRight} />
              </span>
            </HoverActions>
          </ProjectImage>
        )}
        <h4>{name}</h4>
        <p className="font-sm">
          <i>{description}</i>
        </p>
      </ProjectCardContainer>
    </>
  );
};

const ProjectCardContainer = styled(Comp.Column)`
  width: 100%;
  transition: all 0.15s ease-in-out;
  margin-bottom: 4rem;

  > img {
  }

  &:hover {
    text-decoration: line-through;
    transform: translate(0px, -1px);
  }
`;

const HoverActions = styled.a`
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.15s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none !important;
`;

const ProjectImage = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;

  &:hover {
    ${HoverActions} {
      opacity: 1;
    }
  }
`;
