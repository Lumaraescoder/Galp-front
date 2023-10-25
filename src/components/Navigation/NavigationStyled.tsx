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
`;
export const StyledLink = styled.a<any>`
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease-in;

  border-bottom-color: ${(props) => (props.active ? 'currentColor' : 'transparent')};

  &:hover {
    border-bottom-color: currentColor;
  }
`;
