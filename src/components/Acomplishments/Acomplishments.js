import React from 'react';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxImage } from './AcomplishmentsStyles';

const data = [
  {number: '' , text:'Flipkart Certificate', image:'/images/img3.png',url:'https://drive.google.com/file/d/1RD9UQvri_bmGFV7wyKPex9Fx4a19mFit/view?usp=sharing', isImage:true},
  {number: '' , text:'GFG Certificate', image:'/images/img5.png',url:'https://drive.google.com/file/d/1Sr-2gGGqJpbouwObMQDgCldyvPbc-Oig/view?usp=sharing', isImage:true},
  

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
     { data.map(( card,index ) => ( 
       <Box key={index}>
        {card.isImage && <BoxImage src={card.image} onClick={() =>{window.open(card.url, '_blank')}} />}
          <BoxNum>{card.number}</BoxNum>
         <BoxText>{card.text}</BoxText> 
       </Box>
     ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
