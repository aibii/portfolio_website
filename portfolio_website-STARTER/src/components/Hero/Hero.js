import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center> 
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack developer with experience in React, Node.js, and MongoDB.
      </SectionText>
       {/* Redirecting the browser to a new URL */}
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;