import React from "react";
import * as Comp from "./layoutComponents";
import Circle1 from "../images/circle-1.svg";
import Circle2 from "../images/circle-2.svg";
import styled from "styled-components";

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <h1>
        Hi! I&apos;m Dan Pliego, I live in Mexico City and I do <i>branding</i>,{" "}
        <i>product design</i> and <i>front-end dev</i> on days and <i>music</i>{" "}
        at nights.
      </h1>
      <Comp.FlexAlignChild>
        <AvailableCircle />
        <p className="font-sm reset-m">
          Currently available for Full-time and Freelance
        </p>
      </Comp.FlexAlignChild>
    </HeroContent>
    <ImagesContainer>
      <img src={Circle1} />
      <img src={Circle2} />
    </ImagesContainer>
  </HeroContainer>
);

export default Hero;

const HeroContainer = styled(Comp.FlexAlignChild)`
  padding: 11rem 0 4rem;
`;

const HeroContent = styled.div`
  flex: 4;
  padding-right: 2rem;

  h1 {
    font-size: 3.9rem;
    margin-bottom: 3rem;
  }

  i {
    transition: all 0.3s ease-in-out;
    display: inline-block;

    &:hover {
      transform: translate(0px, -3px);
    }
  }
`;

const ImagesContainer = styled.div`
  flex: 2;
  position: relative;
  height: 343px;

  img {
    top: -6rem;
    position: absolute;

    &:last-child {
      top: 3.5rem;
      left: 0.5rem;

      &:hover {
        transition: all 0.5s ease-in-out;
        transform: translate(0px, -2rem);
      }
    }
  }
`;

const AvailableCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: 1px solid #000;
  margin-right: 0.5rem;
  position: relative;

  &:after {
    content: " ";
    background: #000;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    display: block;
    left: 4px;
    position: absolute;
    top: 4px;
  }
`;
