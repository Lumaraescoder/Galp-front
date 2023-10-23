import Link from 'next/link';
import React, { useState } from 'react';

import {
  ActiveLink,
  Logo,
  MenuIcon,
  MenuLinks,
  NavbarContainer,
  StyledLink
} from './NavigationStyled';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<ActiveLink>('Home');

  const handleSetActiveLink = (link: ActiveLink) => {
    setActiveLink(link);
  };

  return (
    <NavbarContainer>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo src="/images/Galp.png" alt="Galp logo" />
          <div className="hidden items-center space-x-4 md:flex">
            <StyledLink
              href="/search"
              active={activeLink === 'Home'}
              onClick={() => handleSetActiveLink('Home')}
              className="hover:text-white"
            >
              Home
            </StyledLink>
            <StyledLink
              href="/backoffice"
              active={activeLink === 'BackOffice'}
              onClick={() => handleSetActiveLink('BackOffice')}
              className="hover:text-white"
            >
              BackOffice
            </StyledLink>
          </div>
        </div>

        <MenuLinks open={isOpen} className="ml-auto space-x-4 md:flex">
          <div className="flex items-center space-x-2">
            &nbsp;
            <i className="fa fa-user-circle"></i>
            &nbsp;
            <Link href="/#">João</Link>
            &nbsp;
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </MenuLinks>

        <div className="flex items-center">
          <MenuIcon
            onClick={() => setIsOpen(!isOpen)}
            className="mr-4 block cursor-pointer md:hidden"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </MenuIcon>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navigation;
