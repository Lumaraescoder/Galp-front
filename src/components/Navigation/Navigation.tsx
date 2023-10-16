import Link from 'next/link';
import React, { useState } from 'react';

import { Logo, MenuIcon, MenuLinks, NavbarContainer, StyledLink } from './NavigationStyled';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Esta função será usada para atualizar o link ativo
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <NavbarContainer>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo src="images/Galp.png" alt="Galp logo" />
          <div className="hidden items-center space-x-4 md:flex">
            {/* Use a função handleSetActiveLink para mudar o estado do link ativo */}
            <StyledLink
              href="/#"
              active={activeLink === 'Home'} // true se este é o link ativo
              onClick={() => handleSetActiveLink('Home')}
              className="hover:text-white"
            >
              Home
            </StyledLink>
            <StyledLink
              href="/backoffice"
              active={activeLink === 'BackOffice'} // true se este é o link ativo
              onClick={() => handleSetActiveLink('BackOffice')}
              className="hover:text-white"
            >
              BackOffice
            </StyledLink>
            {/* ... outros links ... */}
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

        {/* Container direito para o logo (em dispositivos móveis) e ícone do hambúrguer */}
        <div className="flex items-center">
          <MenuIcon
            open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="mr-4 block cursor-pointer md:hidden" // Adicionado margem à direita
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </MenuIcon>

          {/* Logo visível apenas em dispositivos móveis */}
          <div className="block md:hidden">
            <Logo src="" alt="Galp logo" /> {/* Insira o caminho correto no src */}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navigation;
