import React from 'react';
import { DiAngularSimple, DiFirebase, DiReact, DiZend, DiPhotoshop, DiMysql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from './TechnologiesStyles';
import { IconContainer } from '../Acomplishments/AcomplishmentsStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <IconContainer>
          <DiReact size="3rem"/>
          <DiAngularSimple size="3rem"/>
        </IconContainer>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js and Angular
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <IconContainer>
          <DiMysql size="3rem"/>
          <DiFirebase size="3rem"/>
        </IconContainer>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and MySQL
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <IconContainer>
            <DiZend size="3rem"/>
            <DiPhotoshop size="3rem"/>
        </IconContainer>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Figma and Photoshop
            </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
