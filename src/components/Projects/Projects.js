import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { projectDescriptions } from '../../constants/constant_descriptions';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({title, description, image, tags, source, visit,id}) =>(
        <BlogCard key={id}>
          <Img src = {image}/>
          <TitleContent title>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>View</ExternalLinks>
            <ExternalLinks href={source}>Repo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>

);

export default Projects;