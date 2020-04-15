import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";

// eslint-disable-next-line
const Beaubble = require("../images/thumbnails/beaubble.jpg");
const Form = require("../images/thumbnails/form-remodel.jpg");
const EasyBroker = require("../images/thumbnails/easybroker.jpg");
const MyBusiness = require("../images/thumbnails/mybusiness.jpg");
const Berbli = require("../images/thumbnails/berbli.jpg");
const Praga = require("../images/thumbnails/praga.jpg");
const DealEngine = require("../images/thumbnails/deal-engine.jpg");
const Indigo = require("../images/thumbnails/indigo.jpg");
const Ramiro = require("../images/thumbnails/ramiro.jpg");
const EBApp = require("../images/thumbnails/ebapp.jpg");
const Ficosec = require("../images/thumbnails/ficosec.jpg");
const YAM = require("../images/thumbnails/yam.jpg");

// eslint-disable-next-line
const ArrowRight = require("../images/arrow-right.svg");
const ArrowDown = require("../images/arrow-down.svg");

export const HomeProjects: React.FC = () => {
  return (
    <div id="work" style={{ paddingTop: "6rem" }}>
      <h4>
        Selected work <img src={ArrowDown} />
      </h4>
      <Comp.Row mobile padded>
        <ProjectCard
          image={EBApp}
          name="EasyBroker App"
          description="UX - UI Design"
          url="/ebapp"
        />
        <ProjectCard
          image={Form}
          name="Form Kitchens"
          description="Web app UX and UI"
          url="/form"
        />
        <ProjectCard
          image={Ficosec}
          name="Ficosec"
          description="Web app UX and UI"
          url="/ficosec"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={Beaubble}
          name="Beaubble"
          description="Front-End Development"
          external_url="https://beaubble.com"
        />
        <ProjectCard
          image={Praga}
          name="Praga &amp; Berlin"
          description="Website template designs"
          url="/praga"
        />
        <ProjectCard
          image={YAM}
          name="Yam"
          description="Website design and development"
          url="/yam"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={EasyBroker}
          name="EasyBroker Homepage"
          description="Visual design and front-end development in collaboration with in-house team"
          external_url="https://www.easybroker.com"
        />
        <ProjectCard
          image={Berbli}
          name="Berbli"
          description="Full Project"
          external_url="http://berbli.danielpliego.com/"
        />
        <ProjectCard
          image={Ramiro}
          name="Ramiro Mendoza"
          description="Full Project"
          external_url="http://ramiromendozaarq.com"
        />
      </Comp.Row>
      <Comp.Row mobile padded>
        <ProjectCard
          image={Indigo}
          name="Indigo Translations"
          description="Full Project"
          external_url="http://indigotranslations.com.mx/"
        />
        <ProjectCard
          image={MyBusiness}
          name="MyBusiness"
          description="Full Project"
          external_url="https://mybusinesspos.com/"
        />
        <ProjectCard
          image={DealEngine}
          name="Deal Engine Landing Page"
          description="Full Project"
          external_url="https://deal-engine.com/"
        />
      </Comp.Row>
    </div>
  );
};

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  external_url?: string;
  url?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  name,
  description,
  external_url,
  url
}) => {
  return (
    <>
      <ProjectCardContainer padded>
        {external_url ? (
          <a href={external_url} target="_blank">
            <ProjectImage>
              <img src={image} />
              <HoverActions>
                <span>
                  View website <img src={ArrowRight} />
                </span>
              </HoverActions>
            </ProjectImage>
            <h4 style={{ marginBottom: "0.5rem" }}>{name}</h4>
            <p className="font-sm">
              <i>{description}</i>
            </p>
          </a>
        ) : (
          <Link to={url}>
            <ProjectImage>
              <img src={image} />
              <HoverActions>
                <span>
                  View project <img src={ArrowRight} />
                </span>
              </HoverActions>
            </ProjectImage>
            <h4 style={{ marginBottom: "0.5rem" }}>{name}</h4>
            <p className="font-sm">
              <i>{description}</i>
            </p>
          </Link>
        )}
      </ProjectCardContainer>
    </>
  );
};

const ProjectCardContainer = styled(Comp.Column)`
  width: 100%;
  transition: all 0.15s ease-in-out;
  margin: 1rem 0;

  > a {
    display: block;
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
