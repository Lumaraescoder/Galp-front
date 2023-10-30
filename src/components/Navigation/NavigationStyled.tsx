import styled from 'styled-components';

export type MenuLinksProps = {
  open: boolean;
};

export type StyledLinkProps = {
  active: boolean;
  href: string;
  onClick: () => void;
  className: string;
};
export type ActiveLink = 'Home' | 'BackOffice';

export const NavbarContainer = styled.nav`
  background-color: #ea5b0b;
  color: white;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 20px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const MenuIcon = styled.button`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuLinks = styled.div<MenuLinksProps>`
  @media (max-width: 1023px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
  @media (max-width: 768px) {
    a {
      display: none;
    }
    i {
      display: none;
    }
  }
`;
export const StyledLink = styled.a<any>`
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease-in;
  border-bottom-color: ${(props) => (props.active ? 'currentColor' : 'transparent')};

  &:hover {
    border-bottom-color: currentColor;
  }
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #ea5b0b;
  z-index: 1000;
  padding: 1rem;
`;
