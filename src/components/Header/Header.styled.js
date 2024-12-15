import styled from 'styled-components';
import { theme } from '../../theme';

// Main header section styles
export const HeaderContainer = styled.header`
  border-bottom: 1px solid #ececec;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 40px;
`;

export const MailPhoneContainer = styled.ul`
  display: flex;
  gap: 30px;
`;

export const TextIconContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ElementsContainer = styled.div`
  display: flex;
  align-items: center;
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
