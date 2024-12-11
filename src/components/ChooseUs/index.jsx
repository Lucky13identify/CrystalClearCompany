import SectionsContainer from '../SectionsContainer';
import {
  ChooseUsSection,
  HeaderText,
  CardContainer,
  Card,
} from './ChooseUs.styled';

const textsForCards = [
  {
    id: 1,
    header: 'Affordable Rates',
    description:
      'Get premium-quality service at a price that fits your budget. We believe that everyone deserves a clean space without overpaying.',
  },
  {
    id: 2,
    header: 'Reliability and Trustworthiness',
    description:
      'You can count on us to show up on time, respect your property, and deliver consistent results. Our staff is carefully vetted and trained to ensure your peace of mind.',
  },
  {
    id: 3,
    header: 'Satisfaction Guarantee',
    description:
      'We stand by the quality of our work. If you’re not completely satisfied, we’ll come back and redo your requests at any time. Every home has its unique features, the customer is always right.',
  },
  {
    id: 4,
    header: 'Customized Cleaning Plans',
    description:
      'Every space is unique, and so are your needs. We offer personalized cleaning plans that fit your schedule, preferences, and specific requirements.',
  },
  {
    id: 5,
    header: 'Transparent Communication',
    description:
      'We keep you informed every step of the way, with no hidden fees or surprises. You can reach out to us at any time.',
  },
];

const ChooseUs = () => {
  return (
    <ChooseUsSection>
      <SectionsContainer>
        <HeaderText>Why choose us?</HeaderText>

        <CardContainer>
          {textsForCards.map(({ id, header, description }) => (
            <Card key={id}>
              <h2>{header}</h2>
              <p style={{ textAlign: 'start' }}>{description}</p>
            </Card>
          ))}
        </CardContainer>
      </SectionsContainer>
    </ChooseUsSection>
  );
};

export default ChooseUs;
