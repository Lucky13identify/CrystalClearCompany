import styled from 'styled-components';
import { theme } from '../../theme';

export const FooterSection = styled.section`
  padding: 20px 0 20px 0;
  background-color: ${theme.colors.footer};
`;

export const ElementsContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

export const Logo = styled.p`
  font-family: Raleway, sans-serif;
  font-size: 28px;
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

export const NetworkContainer = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;
