import styled from 'styled-components';
import { theme } from '../../theme';

export const HeaderText = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  padding-top: 10px;
  color: ${theme.colors.secondary};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.ul`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(24px);
  border: 2px solid ${theme.colors.primary};
`;

export const InfoContainer = styled.li`
  width: 600px;
  display: flex;
  font-weight: 700;
  color: ${theme.colors.secondary};
  justify-content: space-between;
`;
