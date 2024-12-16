import styled from 'styled-components';
import { theme } from '../../../theme';

export const FlexContactsNameContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const FlexNameContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 700px;
`;

export const HeaderText = styled.h2`
  font-size: 20px;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 510px;
`;

export const FlexContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FlexInfoContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const RadioGroupFlexContainer = styled.label`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 500px;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const TextInfo = styled.p`
  margin: 20px 0;
  color: ${theme.colors.primary};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ active }) =>
    active ? theme.colors.secondary : theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
