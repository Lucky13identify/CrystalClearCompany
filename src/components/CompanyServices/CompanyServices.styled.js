import styled from 'styled-components';
import { theme } from '../../theme';

// Main section styles
export const CompanyServicesSection = styled.section`
  padding: 20px 0 20px 0;
`;

export const HeaderText = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

// Cards styles
export const CardContainer = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardText = styled.p`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 20px 0;
  height: 20px;
  width: 100%;

  background-color: rgba(47, 48, 58, 0.8);
  color: ${theme.colors.secondary};
`;

export const OverlayCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: grey;
`;

// Modal styles

export const TasksContainer = styled.div`
  display: flex;
  gap: 80px;
`;

export const MainTasksContainer = styled.div`
  text-align: left;
  border-radius: 15px;
  padding: 20px;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
`;

export const AdditionalTasksContainer = styled.div`
  text-align: left;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid ${theme.colors.primary};
  backdrop-filter: blur(24px);
`;

export const ListContainer = styled.li`
  color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  color: ${theme.colors.secondary};
  margin-bottom: 20px;
`;

export const HeaderTextModal = styled.h2`
  margin: 20px 0;
  color: ${theme.colors.secondary};
`;
