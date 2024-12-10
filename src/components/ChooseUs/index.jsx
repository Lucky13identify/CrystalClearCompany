import { ChooseUsSection } from './ChooseUsService';
import SectionsContainer from '../SectionsContainer';

const textForCards = [{}];

const ChooseUs = () => {
  return (
    <ChooseUsSection>
      <SectionsContainer>
        <ul style={{ display: 'flex', gap: 30 }}>
          <li
            style={{ backgroundColor: 'grey', padding: 20, borderRadius: 10 }}
          >
            <h2>Head</h2>
            <p>text</p>
          </li>
          <li>
            <h2>Head</h2>
            <p>text</p>
          </li>
          <li>
            <h2>Head</h2>
            <p>text</p>
          </li>
        </ul>
      </SectionsContainer>
    </ChooseUsSection>
  );
};

export default ChooseUs;
