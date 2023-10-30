import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import {
  Logo,
  MenuIcon,
  MenuLinks,
  NavbarContainer,
  Sidebar,
  StyledLink,
  Wrapper
} from './NavigationStyled';

const Navigation = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <>
      <NavbarContainer>
        <Wrapper>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo src="/images/Galp.png" alt="Galp logo" />
              <div className="hidden items-center space-x-4 md:flex">
                <StyledLink
                  href="/search"
                  active={isActive('/search')}
                  className="hover:text-white"
                >
                  Home
                </StyledLink>
                <StyledLink
                  href="/backoffice"
                  active={isActive('/backoffice')}
                  className="hover:text-white"
                >
                  BackOffice
                </StyledLink>
              </div>
            </div>

            <MenuLinks open={isMobileMenuOpen} className="ml-auto space-x-4 md:flex">
              <div className="flex items-center space-x-2">
                &nbsp;
                <i className="fa fa-user-circle"></i>
                &nbsp;
                <a href="">João</a>
                &nbsp;
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </MenuLinks>

            <div className="flex items-center">
              <MenuIcon
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mr-4 block cursor-pointer md:hidden"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </MenuIcon>
            </div>
          </div>
        </Wrapper>
      </NavbarContainer>

      <Sidebar isOpen={isMobileMenuOpen}>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="font-bold text-white">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fa fa-times text-white"></i>
          </button>
        </div>
        <div className="py-4">
          <Link href="/search" className="block px-4 py-2 text-white hover:bg-gray-700">
            Home
          </Link>
          <Link href="/backoffice" className="block px-4 py-2 text-white hover:bg-gray-700">
            BackOffice
          </Link>
        </div>
      </Sidebar>
    </>
  );
};

export default Navigation;
