import React from 'react';
import { DiAngularSimple, DiFirebase, DiReact, DiZend, DiPhotoshop, DiMysql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, StyledListItem, IconWrapper } from './TechnologiesStyles';
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
    <StyledListItem>
      <IconWrapper>
        <DiReact size="3rem" />
        <DiAngularSimple size="3rem" />
      </IconWrapper>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js and Angular
        </ListParagraph>
      </ListContainer>
    </StyledListItem>

    <StyledListItem>
      <IconWrapper>
        <DiMysql size="3rem" />
        <DiFirebase size="3rem" />
      </IconWrapper>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          MySQL and Node.js
        </ListParagraph>
      </ListContainer>
    </StyledListItem>

    <StyledListItem>
      <IconWrapper>
        <DiZend size="3rem" />
        <DiPhotoshop size="3rem" />
      </IconWrapper>
      <ListContainer>
        <ListTitle>UX/UI</ListTitle>
        <ListParagraph>
          Experience with <br />
          Figma and Photoshop
        </ListParagraph>
      </ListContainer>
    </StyledListItem>
    </List>
  </Section>
);

export default Technologies;
