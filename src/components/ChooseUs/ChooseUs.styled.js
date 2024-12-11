import styled from 'styled-components';
import { theme } from '../../theme';

// Main section styles
export const ChooseUsSection = styled.section`
  /* TODO */
  padding: 20px 0 20px 0;
  background-color: #9932cc;
`;

export const HeaderText = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.secondary};
`;

// Cards styles
export const CardContainer = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 10px;
  border: 2px solid ${theme.colors.secondary};
  padding: 20px;
  border-radius: 10px;
  max-width: 250px;
  height: 180px;

  color: ${theme.colors.secondary};
  background-color: transparent;
`;
