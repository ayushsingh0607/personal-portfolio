import React from 'react';
// import Image from '../../../public/images/img3.png';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxImage } from './AcomplishmentsStyles';

const data = [
  {image:'/images/img3.png'}

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
     { data.map(( card,index ) => ( 
       <Box key={index} onClick={() => {window.open ('https://drive.google.com/file/d/1RD9UQvri_bmGFV7wyKPex9Fx4a19mFit/view?usp=sharing', '_blank')} }>
          <BoxNum>{card.number}</BoxNum>
         <BoxText>{card.text}</BoxText> 
         <BoxImage src={data[index].image} />
       </Box>
     ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
