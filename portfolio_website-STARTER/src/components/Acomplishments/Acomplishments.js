import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { data } from '../../constants/constants';


const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;


/**Steps to Finish Portfolio projects:
 * 1) Build several projects
 * 2) Update const data in constants.js
 * 3) Update the Projects component in Projects.js
 * 4) Attach Resume to Learn More button in Hero.js
 */