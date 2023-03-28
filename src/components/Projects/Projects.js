import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects" >
    <SectionDivider/>
    <SectionTitle style={{marginTop:50}}>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,title,image,description,tags,visit}) => (
       <BlogCard key ={id}>
         <Img src={image} style={{borderRadius:'8px'}} />
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr/>
         </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target='_blank'>visit</ExternalLinks>
          </UtilityList>
       </BlogCard> 
      ))}
    </GridContainer>
  </Section>
);

export default Projects;