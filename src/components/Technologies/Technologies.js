import React from 'react';
import { DiReact, DiHtml5,DiCss3Full, DiNodejsSmall, DiMongodb,DiMysql } from 'react-icons/di';
import {SiNextDotJs} from 'react-icons/si';
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
        <SiNextDotJs size='3.1rem'/>
        {/* <SiMui size='3rem' /> */}
        </div>  
        <ListContainer>
          <ListTitle> Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js ,Next.js, MUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div className="logo" style={{display:'flex',flexDirection:'row'}}>
        <DiNodejsSmall size='3.5rem' />
        </div>  
        <ListContainer>
          <ListTitle> Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Express.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div className="logo" style={{display:'flex',flexDirection:'row'}}>
        <DiMongodb size='3rem' />
        <DiMysql size='3.5rem' />
        </div>  
        <ListContainer>
          <ListTitle> Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB , MySQl and Firebase.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
