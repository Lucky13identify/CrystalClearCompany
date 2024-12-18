import styled from 'styled-components';
import { theme } from '../../../theme';

export const HeaderText = styled.h2`
  font-size: 20px;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
