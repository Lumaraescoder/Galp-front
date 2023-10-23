import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Logo, MenuIcon, MenuLinks, NavbarContainer, StyledLink } from './NavigationStyled';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <NavbarContainer>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo src="/images/Galp.png" alt="Galp logo" />
          <div className="hidden items-center space-x-4 md:flex">
            <StyledLink
              href="/search"
              active={isActive('/search')} // rota para "Home"
              className="hover:text-white"
            >
              Home
            </StyledLink>
            <StyledLink
              href="/backoffice"
              active={isActive('/backoffice')} // rota para "BackOffice"
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
