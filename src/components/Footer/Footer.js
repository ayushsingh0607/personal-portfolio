import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:9336754117">9336754117</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:ayushraj0607@gmail.com">ayushraj0607@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The aim of the developer should not only to understand the technology but also to master it.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/ayushsingh0607">
        <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ayush-raj-9b4255209/">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
