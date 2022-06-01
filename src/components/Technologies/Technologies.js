import React from 'react';
import { DiNodejs, DiReact, DiHtml5,DiCss3Full } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="techno">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As I am very passionate about web development, I have a lot of experience with different technologies and want to learn about many more.
    </SectionText>
    <List>
      <ListItem>
        <div className="logo" style={{display:'flex',flexDirection:'row'}}>
        <DiReact size='3rem' />
        <DiHtml5 size='3rem' />
        <DiCss3Full size='3rem' />
        </div>  
        <ListContainer>
          <ListTitle> Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js , HTML , CSS , next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div className="logo" style={{display:'flex',flexDirection:'row'}}>
        <DiNodejs size='3.5rem' />
        </div>  
        <ListContainer>
          <ListTitle> Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Database.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
