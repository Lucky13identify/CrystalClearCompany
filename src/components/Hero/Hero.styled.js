import styled from 'styled-components';
import { Form } from 'formik';
import { theme } from '../../theme';

// Hero styles
export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const MainText = styled.h1`
  text-transform: uppercase;
  color: ${theme.colors.secondary};
`;

// Modal styles
export const FormSuspense = styled(Form)``;

export const ModalHeader = styled.h2`
  margin: 20px 0;
  text-align: center;
`;
