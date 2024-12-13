import SectionsContainer from '../SectionsContainer';
import {
  InfoContainer,
  HeaderText,
  AdditionalOptionsSection,
  ListContainer,
  FlexContainer,
} from './AdditionalOptions.styled';

const listAdditionalOptions = [
  {
    id: 1,
    option:
      'Washing windows inside (standard height) + washing of entrance glass door',
    price: '59-99$',
  },
  { id: 2, option: 'Baseboards washing', price: '39-49$' },
  { id: 3, option: 'Oven interior', price: '50$' },
  { id: 4, option: 'Washing refrigerator inside', price: '49-69$' },
  { id: 5, option: 'Washing dishes', price: '15$' },
  { id: 6, option: 'Change the sheets', price: '6-10$ per room' },
];

const AdditionalOptions = () => {
  return (
    <section className="locationSection overlayAdditionalOptions">
      <HeaderText>Additional options</HeaderText>
      <SectionsContainer>
        <FlexContainer>
          <ListContainer>
            {listAdditionalOptions.map(({ id, option, price }) => (
              <InfoContainer key={id}>
                <p style={{ width: '320px' }}>{option}</p>
                <p>{price}</p>
              </InfoContainer>
            ))}
          </ListContainer>
        </FlexContainer>
      </SectionsContainer>
    </section>
  );
};

export default AdditionalOptions;
