import React from "react";
import * as Comp from "./layoutComponents";
import Circle1 from "../images/circle-1.svg";
import Circle2 from "../images/circle-2.svg";
import styled from "styled-components";
import { theme } from "./theme";
import * as Keyframes from "./keyframes";

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <h1>
        Hi! I&apos;m Dan Pliego, I live in Mexico City and I do <i>branding</i>,{" "}
        <i>product design</i> and <i>front-end dev</i>.
      </h1>
      <Comp.FlexAlignChild>
        <AvailableCircle />
        <p className="reset-m">
          Currently available for full-time and contract work{" "}
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
  padding: 8rem 0 0;
  @media ${theme.breakpoint.upFromMobile} {
    padding: 11rem 0 4rem;
  }
`;

const HeroContent = styled.div`
  flex: 4;
  padding-right: 2rem;

  h1 {
    font-size: 2rem;
  }

  @media ${theme.breakpoint.upFromMobile} {
    h1 {
      font-size: 3.9rem;
      margin-bottom: 3rem;
    }

    i {
      display: inline-block;
    }
  }

  i {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translate(0px, -3px);
    }
  }
`;

const ImagesContainer = styled.div`
  @media ${theme.breakpoint.onlyMobile} {
    display: none;
  }
  flex: 2;
  position: relative;
  height: 343px;

  img {
    top: -4rem;
    position: absolute;

    &:not(:last-child) {
      animation: ${Keyframes.Rotation} 10s linear;
      animation-iteration-count: infinite;
    }

    &:last-child {
      top: 3.5rem;
      left: 0.5rem;

      &:hover {
        transition: all 0.5s ease-in-out;
        transform: translate(0px, -5rem);
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
  min-width: 1rem;

  @media ${theme.breakpoint.onlyMobile} {
    display: none;
  }

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
