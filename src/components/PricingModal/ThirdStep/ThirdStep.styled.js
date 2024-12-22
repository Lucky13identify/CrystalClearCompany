import styled from 'styled-components';
import { theme } from '../../../theme';

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

export const AddInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const TextInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const CardText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

export const ThirStepContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
