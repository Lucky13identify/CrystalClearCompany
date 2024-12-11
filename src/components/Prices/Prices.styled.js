import styled from 'styled-components';
import { theme } from '../../theme';

export const PricesSection = styled.section`
  background-color: ${theme.colors.primary};
  padding: 20px 0;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 1px solid ${theme.colors.primary};
`;

export const HeaderText = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.secondary};
`;

export const Comment = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
