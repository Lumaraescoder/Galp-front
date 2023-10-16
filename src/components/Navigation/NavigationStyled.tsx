import styled from 'styled-components';

type StyledLinkProps = {
  active: boolean; // Não é opcional desta vez, pois estamos passando explicitamente
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type MenuLinksProps = {
  open: boolean;
};
export const NavbarContainer = styled.nav`
  /* Seus estilos personalizados aqui */
  background-color: #ea5b0b;
  padding: 1rem;
  color: white;
`;

export const Logo = styled.img`
  height: 50px; /* Ou outro tamanho conforme necessário */
`;

export const MenuIcon = styled.button`
  /* Estilos para o ícone do menu */
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuLinks = styled.div<MenuLinksProps>`
  /* seus estilos */

  display: none; /* por padrão será ocultado */

  @media (max-width: 1023px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;
export const StyledLink = styled.a<StyledLinkProps>`
  /* ... estilos existentes ... */
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease-in;

  /* Estilização baseada na propriedade 'active' */
  border-bottom-color: ${(props) => (props.active ? 'currentColor' : 'transparent')};

  &:hover {
    border-bottom-color: currentColor; /* A cor atual do texto */
  }
`;
