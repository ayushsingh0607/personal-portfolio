import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center style={{fontSize:48}}>
        Hey Folks,<br/>
        Welcome to my portfolio.
      </SectionTitle>
      <SectionText>
        I am Ayush Raj and I am an Engineering student from India pursuing my B.Tech in Computer Science and Engineering. I am a Front-end developer and learning Backend Development and a web dev enthusiast.
      </SectionText>
      <Button onClick={()=>window.location="https://www.hackerrank.com/ayush_raj2020"}  >Coding Profile</Button>
    </LeftSection>
  </Section>
);

export default Hero;