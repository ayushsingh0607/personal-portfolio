import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  // { number: 6, text: 'Projects'},
  // { number: 3, text: 'React Projects', },
  // { number: 3, text: 'Python Projects', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
     { data.map(( card,index ) => ( 
       <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
         <BoxText>{card.text}</BoxText> 
       </Box>
     ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
