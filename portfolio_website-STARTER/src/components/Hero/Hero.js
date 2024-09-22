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
      I'm a front-end developer with experience in React and Angular, focused on creating seamless user interfaces.
      </SectionText>
       {/* Redirecting the browser to a new URL */}
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;