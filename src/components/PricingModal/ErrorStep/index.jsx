import { Error } from '@mui/icons-material';
import { HeaderText, ErrorContainer, TextInfo } from './ErrorStep.styled';

const ErrorStep = ({ closeModal }) => {
  return (
    <>
      <ErrorContainer>
        <HeaderText>Ops! Something went wrong...</HeaderText>

        <Error sx={{ fontSize: 140, color: 'red', marginBottom: 3 }} />

        <TextInfo>Try again letter!</TextInfo>

        <button
          type="button"
          onClick={closeModal}
          className="heroButton hvr-grow"
        >
          Done
        </button>
      </ErrorContainer>
    </>
  );
};

export default ErrorStep;
