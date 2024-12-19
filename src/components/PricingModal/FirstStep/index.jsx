import { Field, useFormikContext } from 'formik';
import { useState } from 'react';
import { theme } from '../../../theme';
import {
  NameContainer,
  ContactContainer,
  FlexContactContainer,
  FlexInfoContainer,
  InfoContainer,
  RadioGroupFlexContainer,
  ButtonsContainer,
  FlexNameContainer,
  FlexContactsNameContainer,
  HeaderText,
  TextInfo,
  Button,
} from './FirstStep.styled';

const OPTIONS = [
  {
    id: 'oneTime',
    value: 'One-Time',
    buttons: [
      {
        id: 1,
        name: 'Design with Time',
        text: 'Our Design with Time Cleaning Package is ideal for the homeowner wanting a one-time clean or as-needed services. This cleaning package offers a fixed rate based on the amount of time you would like your cleaning team servicing your home. Our Design with Time Package ranges from 2 to 5 hours. The two maids assigned to your home will tackle your cleaning needs in order of importance, as prioritized by you. We will do our best to complete your list within the time you have purchased.',
      },
      {
        id: 2,
        name: 'Deep Clean',
        text: 'Our Deep Cleaning Package is the most thorough cleaning service. The most significant difference between the Deep Cleaning Package and our other cleaning packages is the amount of time and detail we spend cleaning what we refer to as your vertical surfaces. Vertical surfaces include baseboards, trim work, interior windows, blinds, exterior cabinets/drawers, light fixtures, and doors.',
      },
      {
        id: 3,
        name: 'Move In/Move Out',
        text: 'Our Empty Home Move In/Out Cleaning Package is perfect for the homeowner who needs a vacant home, apartment, or condo cleaned. This package will help ensure your home is move-in ready! To ensure the highest quality of service, personal belongings must be removed prior to your cleaning.',
      },
    ],
  },
  {
    id: 'weekly',
    value: 'Weekly',
    buttons: [
      {
        id: 1,
        name: 'Premium Weekly',
        text: "The Premium Maintenance Cleaning package offers thorough cleaning service for customers that desire a home cleaning on a regular basis. To maintain the standard on cleanliness, Two Maids will clean vertical surfaces such as windows, doors, and baseboards in a rotation each cleaning throughout the life of the recurrence. It's best to start services with a Deep Clean to tackle any build-up and ensure all vertical surfaces are thoroughly cleaned on the first visit.",
      },
      {
        id: 2,
        name: 'Alternating Weekly',
        text: 'With the Alternating Cleaning Package we are able to alternate your cleaning services between our Premium and Touch-Up cleaning services. This specific cleaning package is best suited for the homeowner who does not require detailed cleaning on a regular basis, but still wishes to receive high quality house cleaning once a week, or every other week.',
      },
    ],
  },
  {
    id: 'biWeekly',
    value: 'Bi-weekly',
    buttons: [
      {
        id: 1,
        name: 'Premium Biweekly',
        text: "The Premium Maintenance Cleaning package offers thorough cleaning service for customers that desire a home cleaning on a regular basis. To maintain the standard on cleanliness, Two Maids will clean vertical surfaces such as windows, doors, and baseboards in a rotation each cleaning throughout the life of the recurrence. It's best to start services with a Deep Clean to tackle any build-up and ensure all vertical surfaces are thoroughly cleaned on the first visit.",
      },
      {
        id: 2,
        name: 'Alternating Biweekly',
        text: 'With the Alternating Cleaning Package we are able to alternate your cleaning services between our Premium and Touch-Up cleaning services. This specific cleaning package is best suited for the homeowner who does not require detailed cleaning on a regular basis, but still wishes to receive high quality house cleaning once a week, or every other week.',
      },
    ],
  },
  {
    id: 'monthly',
    value: 'Monthly',
    buttons: [
      {
        id: 1,
        name: 'Premium Monthly',
        text: "The Premium Maintenance Cleaning package offers thorough cleaning service for customers that desire a home cleaning on a regular basis. To maintain the standard on cleanliness, Two Maids will clean vertical surfaces such as windows, doors, and baseboards in a rotation each cleaning throughout the life of the recurrence. It's best to start services with a Deep Clean to tackle any build-up and ensure all vertical surfaces are thoroughly cleaning on the first visit.",
      },
    ],
  },
];

const HOME_FIELDS = [
  {
    id: 'bedrooms',
    label: 'Bedrooms',
    type: 'number',
    min: 0,
    placeholder: '0',
  },
  {
    id: 'bathrooms',
    label: 'Bathrooms',
    type: 'number',
    min: 0,
    placeholder: '0',
  },
  { id: 'people', label: 'People', type: 'number', min: 0, placeholder: '0' },
  { id: 'pets', label: 'Pets', type: 'number', min: 0, placeholder: '0' },
  {
    id: 'squareFootage',
    label: 'Square Footage',
    type: 'number',
    min: 500,
    step: 100,
    placeholder: '0',
  },
];

const FirstStep = ({ values, isSubmitting, nextStep }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [optionType, setOptionType] = useState('One-Time');
  const { setFieldValue } = useFormikContext();

  const handleOptionChange = value => {
    setOptionType(value);
  };

  const handleButtonClick = (name, text) => {
    setActiveButton({ name, text });
    // Update the cleaningPackage field with the selected button's name
    setFieldValue('cleaningPackage', name);
  };

  return (
    <>
      <HeaderText>Contact Information</HeaderText>
      <FlexContactsNameContainer>
        <FlexNameContainer style={{ display: 'flex', width: 700, gap: 10 }}>
          <NameContainer>
            <label htmlFor="firstName">First Name</label>
            <Field
              style={FieldStyles}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
            />
          </NameContainer>
          <NameContainer>
            <label htmlFor="secondName">Second Name</label>
            <Field
              style={FieldStyles}
              type="text"
              id="secondName"
              name="secondName"
              placeholder="Enter your second name"
            />
          </NameContainer>
        </FlexNameContainer>
        <FlexContactContainer>
          <ContactContainer>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              style={FieldStyles}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
          </ContactContainer>
          <ContactContainer>
            <label htmlFor="email">Email</label>
            <Field
              style={FieldStyles}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </ContactContainer>
        </FlexContactContainer>
      </FlexContactsNameContainer>

      {/* Tell us about your home */}
      <HeaderText>Tell Us About Your Home</HeaderText>
      <FlexInfoContainer>
        {HOME_FIELDS.map(({ id, label, type, ...rest }) => (
          <InfoContainer key={id}>
            <label htmlFor={id}>{label}</label>
            <Field
              style={FieldStyles}
              id={id}
              name={id}
              type={type}
              {...rest}
              data-calculated-field="true"
            />
          </InfoContainer>
        ))}
      </FlexInfoContainer>

      {/* Cleaning types*/}

      <HeaderText>What Type of Cleaning Would You Like?</HeaderText>
      <RadioGroupFlexContainer id="radioGroup">
        {OPTIONS.map(({ id, value }) => (
          <div
            key={id}
            style={{ display: 'flex', alignItems: 'center', gap: 5 }}
          >
            <Field
              type="radio"
              id={id}
              name="optionCleaning"
              value={value}
              className="form-check-input"
              onClick={() => handleOptionChange(value)}
            />
            <label htmlFor={id} className="form-check-label">
              {value}
            </label>
          </div>
        ))}
      </RadioGroupFlexContainer>

      {/* Buttons cleaning package */}
      <HeaderText>Select a Cleaning Package</HeaderText>
      <ButtonsContainer>
        {OPTIONS.find(option => option.value === optionType)?.buttons.map(
          ({ name, id, text }) => (
            <Button
              key={id}
              type="button"
              active={activeButton?.name === name}
              className="heroButton hvr-grow"
              onClick={() => {
                handleButtonClick(name, text);
                setActiveButton({ name, text });
              }}
            >
              {name}
            </Button>
          )
        )}
      </ButtonsContainer>

      {activeButton && <TextInfo>{activeButton?.text}</TextInfo>}
    </>
  );
};

export default FirstStep;

const FieldStyles = {
  padding: '10px',
  marginTop: '5px',
  borderRadius: '5px',
  border: `1px solid ${theme.colors.primary}`,
};
