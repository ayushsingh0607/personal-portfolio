import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{color:'white',display:'flex',alignItems:'center',marginBottom:'21px'}}>
        <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
         </a>
      </Link>
    </Div1>
    <Div2>
      <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#techno">
        <NavLink>Technologies</NavLink>
      </Link>
      </li><li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ayushsingh0607">
        <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ayush-raj-9b4255209/">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
