import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:996-504-171-103">996-504-171-103</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@aybiykeomurzakova@gmail.com">contact@aybiykeomurzakova@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>On a Journey to Master the Art of Coding</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/aibii">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aibiike-omurzakova-326299221/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
