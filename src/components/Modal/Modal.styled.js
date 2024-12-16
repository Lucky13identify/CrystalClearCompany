import styled from 'styled-components';
import { Cancel } from '@mui/icons-material';
import { theme } from '../../theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: ${({ size }) =>
    size === 'small'
      ? '400px'
      : size === 'middle'
      ? '800px'
      : size === 'big'
      ? '1000px'
      : 'auto'};
  position: relative;
  max-height: 85vh;
  overflow: hidden;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
`;

export const CloseIcon = styled(Cancel)`
  color: ${theme.colors.secondary};
  font-size: 60px;
  &:hover {
    color: ${theme.colors.primary};
  }
`;
