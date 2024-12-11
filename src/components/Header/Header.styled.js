import styled from 'styled-components';
import { theme } from '../../theme';

// Main header section styles
export const HeaderContainer = styled.header`
  border-bottom: 1px solid #ececec;
`;

export const ElementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

// Logo styles
export const Logo = styled.p`
  font-family: Raleway, sans-serif;
  font-size: 34px;
`;

export const LogoFirstPart = styled.span`
  color: ${theme.colors.primary};
`;

export const LogoSecondPart = styled.span`
  padding: 6px;
  border-radius: 12px;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
`;

// Network styles
export const NetworkContainer = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;
