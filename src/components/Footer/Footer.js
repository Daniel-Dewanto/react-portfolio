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
          <LinkItem href="tel:+62-813-1669-4520">+62-813-1669-4520</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:daniel.dewanto1111@gmail.com">daniel.dewanto1111@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>One Concept at a Time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/daniel-dewanto">
            <AiFillGithub size = "3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/daniel.dewanto/">
            <AiFillInstagram size = "3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/daniel-dewanto-1432a8202/">
            <AiFillLinkedin size = "3rem"/>
          </SocialIcons>
            </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
