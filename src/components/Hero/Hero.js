import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello Traveller! <br/>
        Welcome to my Journey
      </SectionTitle>
      <SectionText>
        Welcome Visitor! I appreciate that you are taking time out of your day to check out my website! This website will contain notable events in my programming journey
      </SectionText>
      <Button disabled onClick={() => window.location = "mailto:daniel.dewanto1111@gmail.com"}>Email Me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;