import Link from 'next/link';
import React, { useCallback, useState } from 'react';

import { Logo, MenuIcon, MenuLinks, NavbarContainer, StyledLink } from './NavigationStyled';

type ActiveLink = 'Home' | 'BackOffice';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<ActiveLink>('Home');

  const handleSetActiveLink = useCallback((link: ActiveLink) => {
    setActiveLink(link);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <NavbarContainer>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo src="images/Galp.png" alt="Galp logo" />
          <div className="hidden items-center space-x-4 md:flex">
            <StyledLink
              href="/#"
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

        {/* Container central para os links de navegação */}
        <MenuLinks open={isOpen} className="ml-auto space-x-4 md:flex">
          <div className="flex items-center space-x-2">
            <i className="fa fa-user" aria-hidden="true"></i>
            <Link href="/#">João</Link>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </MenuLinks>

        <div className="flex items-center">
          <MenuIcon onClick={toggleMenu} className="mr-4 block cursor-pointer md:hidden">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </MenuIcon>

          <div className="block md:hidden">
            <Logo src="" alt="Galp logo" />
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navigation;
