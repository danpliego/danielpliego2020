import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import Circle3 from "../images/circle-3.svg";
import Bullet from "../images/bullet.svg";
import { theme } from "./theme";
import * as Keyframes from "./keyframes";

const Footer = () => (
  <FooterContainer id="about">
    <Comp.Container>
      <AboutMeContainer mobile padded>
        <Comp.Column padded style={{ flex: "1" }}>
          <h4>About Me</h4>
          <p className="font-sm">
            I felt in love with the web at 13 years old and at some point it
            wasn’t enough to just browse websites, I had to learn how to design
            and develop them. Then I realized that the web will always be
            evolving and no matter how good I became, there will always be new
            stuff to learn and processes to improve.
          </p>
          <p className="font-sm">
            <strong>
              {" "}
              If I work with you, you can expect me to always be pushing new
              technologies, practices, or ways of work, always with the vision
              of learning from others, collaborate and help to improve the
              workflow and culture of the team.
            </strong>
          </p>
          <p className="font-sm">
            My scope of work starts with design ideation and branding and ends
            with front-end code so I usually work as a link between teams, I can
            be your ninja designer, manage a design team, do front-end
            development or a mix between all of them.
          </p>
          <p className="font-sm">
            My experience involves being the design and front-end director for a
            Mexican startup called EasyBroker for 5 years, designing a CRM (Web
            and App) from scratch and doing daily improvements to the product.
            And for the past year and a half, I have worked for two SF-based
            startups, improving my English and remote-working skills. In the
            meantime, I have also worked as a freelance learning all the perks
            of pitching ideas, communication, writing/verbal skills and
            organization of my workflow.
          </p>
          <p className="font-sm">
            I&apos;m currently looking for a fresh start. I want to contribute
            to an idea that I believe in, building a great product and getting
            to know great people too.
          </p>
          <p className="font-sm">
            Feel free to send me an{" "}
            <a href="mailto:danielpliego@gmail.com">
              <strong>Email</strong>
            </a>{" "}
            or{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+525510265196"
            >
              <strong>Whatsapp</strong>
            </a>{" "}
            to chat about your project and work together.
          </p>
        </Comp.Column>
        <AboutMeImage style={{ flex: "1" }} padded>
          <div className="text-center">
            <img src={Circle3} />
          </div>
        </AboutMeImage>
      </AboutMeContainer>
    </Comp.Container>
    <FooterGrid>
      <GridItem>
        <GridBox>
          <h4>Design Skills</h4>
          <ul>
            <li>UI/Product Design for web and native apps</li>
            <li>Landing page and corporate websites</li>
            <li>Design Systems</li>
            <li>Branding/Art Direction</li>
            <li>UX Design / User Testing</li>
          </ul>
        </GridBox>
        <GridBox>
          <h4>Soft Skills</h4>
          <ul>
            <li>Familiar with Agile, Scrum and Sprints</li>
            <li>
              Experience managing and distribuiting tasks for design teams
            </li>
            <li>
              Experience with employee evaluation process, hiring interviews and
              1-1s
            </li>
            <li>
              I love using{" "}
              <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
                Pomodoro Method
              </a>{" "}
              to maximize my productivity.
            </li>
          </ul>
        </GridBox>
        <GridBox>
          <h4>Tools and Software</h4>
          <ul>
            <li>Figma and Sketch</li>
            <li>Photoshop, Illustrator, Indesign, After Effects</li>
            <li>Invision, Marvel App, Flinto, Zeplin</li>
            <li>VS Code, Sublime Text</li>
            <li>Trello, Asana, Clubhouse Pivotal Tracker</li>
          </ul>
        </GridBox>
      </GridItem>
      <GridItem>
        <GridBox>
          <h4>Front-end Skills</h4>
          <ul>
            <li>Expert in HTML, CSS/SASS</li>
            <li>React Web and Native</li>
            <li>Typescript, Hooks, Styled Components, Storybooks, Gatsby</li>
            <li>Git, Terminal, NPM, Yarn</li>
            <li>Build and mantaing Bootstrap and Wordpress themes</li>
            <li>Ruby on Rails</li>
          </ul>
        </GridBox>
        <GridBox>
          <h4>Music Projects</h4>
          <ul>
            <li>
              Drummer for{" "}
              <a
                href="https://open.spotify.com/artist/3JGWTOa3kJgokE1vNZkO5J"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Felipe el Hombre</strong>
              </a>{" "}
              (2013-2019)
            </li>
            <li>
              Drummer for{" "}
              <a
                href="https://www.facebook.com/letjasondie"
                rel="noopener noreferrer"
                tatget="_blank"
              >
                <strong>Let Jason Die</strong>
              </a>{" "}
              (2009 - 2013)
            </li>
          </ul>
        </GridBox>
        <GridBox>
          <h4>More about me</h4>
          <ul>
            <li>
              I am currently learning advanced JS and Data Structure models
            </li>
            <li>
              Also, I&apos;m learning how to play guitar and keyboard, Ableton
              and a bit of sound engineering to launch a live music project of
              my own.
            </li>
            <li>
              I Practice swimming every day, love to discover new music, and
              live with my partner and 2 cats in Narvarte, Mexico City.
            </li>
          </ul>
        </GridBox>
      </GridItem>
      <GridItem>
        <GridBox>
          <h4>Work Experience</h4>
          <ul>
            <li>
              <strong>
                <a
                  href="https://beaubble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beaubble
                </a>{" "}
                (March 2019 - Current)
              </strong>
              <p className="font-sm">
                Front-End using React, Styled Components, and Storybooks,
                working building the design system and a front-end library to
                develop the product.
              </p>
            </li>
            <li>
              <strong>
                <a
                  href="https://formkitchens.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Form Kitchens
                </a>{" "}
                (February 2019 - January 19)
              </strong>
              <p className="font-sm">
                Develop and design the brand and design a website and a user
                platform using Figma.
              </p>
            </li>
            <li>
              <strong>
                <a
                  href="https://www.easybroker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EasyBroker
                </a>
                (2013 - March 2019)
              </strong>
              <p className="font-sm">
                Created a brand identity, a design system, manage the design and
                front-end team for 3 years, and helped build more than 50
                features and 3 complete platform redesigns on the Ruby on Rails
                app, and helped design and code the Native App using Figma and
                React Native.
              </p>
            </li>
            <li>
              <strong>Osom (2012-2013)</strong>
              <p className="font-sm">
                Design of a lot of websites and also product packaging for our
                clients.
              </p>
            </li>
            <li>
              <strong>Out of the Box (2011)</strong>
              <p className="font-sm">
                Design proposals for new clients and website development and
                coding. I also designed and coded the website for the agency.
              </p>
            </li>
          </ul>
        </GridBox>
        <GridBox>
          <h3>
            I&apos;m always open to new opportunities or fun projects to
            collaborate, send me an{" "}
            <a href="mailto:danielpliego@gmail.com">email</a> or{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+525510265196"
            >
              Whatsapp
            </a>{" "}
            to chat about your project and find ways to work together.
          </h3>
        </GridBox>
      </GridItem>
    </FooterGrid>
    <BodyFooter>© {new Date().getFullYear()} — danielpliego.com</BodyFooter>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  margin-top: 6rem;
  z-index: 2;
  position: relative;
`;

const AboutMeContainer = styled(Comp.Row)`
  padding: 6rem 0;
`;

const AboutMeImage = styled(Comp.Column)`
  img {
    animation: ${Keyframes.Rotation} 10s linear;
    animation-iteration-count: infinite;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  border-top: 0.5px solid #fff;

  ul {
    list-style-image: url(${Bullet});
    margin-left: 1rem;
  }

  @media ${theme.breakpoint.onlyMobile} {
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  flex: 2;
  @media ${theme.breakpoint.upFromMobile} {
    &:not(:last-child) {
      flex: 1;
      border-right: 0.5px solid #fff;
    }
  }
`;

const GridBox = styled.div`
  padding: 10% 10% 5% 10%;
  font-size: 0.88rem;

  @media ${theme.breakpoint.onlyMobile} {
    border-bottom: 0.5px solid #fff;
  }

  &:not(:last-child) {
    border-bottom: 0.5px solid #fff;
  }
`;

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 0.8rem;
  border-top: 0.5px solid #fff;
`;

export default Footer;
