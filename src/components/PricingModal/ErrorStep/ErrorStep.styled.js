import styled from 'styled-components';
import { theme } from '../../../theme';

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

export const TextInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const CardText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

export const ErrorContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
