import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const title = "Hello Traveller, My Name is Daniel!\nWelcome to my Programming Journey!"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center className="fancy_title">
          <span>Hello </span> 
          <span>Traveller</span> 
          <span>, </span> 
          <span>My </span>
          <span>Name </span>
          <span>is </span>
          <span>Daniel</span>
          <span>!</span>
          <br/>
          <span>Welcome </span>
          <span>to </span>
          <span>my </span>
          <span>Programming </span>
          <span>Journey</span>
          <span>!</span>
        </SectionTitle>
      <SectionText>
        Welcome Visitor! I appreciate that you are taking time out of your day to check out my website! This website will contain notable events in my programming journey
      </SectionText>
      <Button onClick={() => window.location = "mailto:daniel.dewanto1111@gmail.com"}>Email Me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;