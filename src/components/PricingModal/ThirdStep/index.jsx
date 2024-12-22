import { TaskAlt } from '@mui/icons-material';
import {
  HeaderText,
  AddInfoContainer,
  CardText,
  TextInfo,
  ThirStepContainer,
} from './ThirdStep.styled';

const ThirdStep = ({ closeModal }) => {
  return (
    <>
      <ThirStepContainer>
        <HeaderText>Congratulations! Your order has been processed!</HeaderText>

        <TaskAlt sx={{ fontSize: 140, color: 'green', marginBottom: 3 }} />
        <AddInfoContainer>
          <TextInfo>
            To complete your order, please proceed with payment using the
            following number: <CardText>+123 456 789</CardText>
          </TextInfo>
          <TextInfo>
            Your details have been processed, and our manager will contact you
            shortly.
          </TextInfo>
          <TextInfo>Thank you for choosing us!</TextInfo>
        </AddInfoContainer>
        <button
          type="button"
          onClick={closeModal}
          className="heroButton hvr-grow"
        >
          Done
        </button>
      </ThirStepContainer>
    </>
  );
};

export default ThirdStep;
