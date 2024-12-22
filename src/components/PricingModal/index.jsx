import { useState } from 'react';
import { Formik, Form } from 'formik';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import ErrorStep from './ErrorStep';

import { HeaderText, Price, ContainerPrice } from './PricingModal.styled';

const initialValues = {
  firstName: '',
  secondName: '',
  phoneNumber: '',
  email: '',
  bedrooms: '',
  bathrooms: '',
  people: '',
  pets: '',
  squareFootage: '',
  optionCleaning: '',
  cleaningPackage: '',
};

const unitPrices = {
  bedrooms: 50,
  bathrooms: 40,
  people: 10,
  pets: 20,
  squareFootage: 15,
  cleaningPackage: {
    'Design with Time': 246,
    'Deep Clean': 400,
    'Move In/Move Out': 343,
    'Premium Weekly': 765,
    'Alternating Weekly': 486,
    'Premium Biweekly': 200,
    'Alternating Biweekly': 246,
    'Premium Monthly': 100,
  },
};

const PricingModal = ({ handleSubmit, closeModal }) => {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(0);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const calculatePrice = values => {
    return Object.entries(values).reduce((total, [key, value]) => {
      if (unitPrices[key]) {
        if (typeof unitPrices[key] === 'object') {
          return total + (unitPrices[key][value] || 0);
        }

        return total + (parseFloat(value) || 0) * unitPrices[key];
      }
      return total;
    }, 0);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        handleSubmit(values, price, setStep);
      }}
    >
      {({ isSubmitting, values }) => {
        setPrice(calculatePrice(values));

        return (
          <Form>
            {step === 1 && (
              <FirstStep isSubmitting={isSubmitting} values={values} />
            )}
            {step === 2 && (
              <SecondStep isSubmitting={isSubmitting} values={values} />
            )}
            {step === 3 && <ThirdStep closeModal={closeModal} />}
            {step === 4 && <ErrorStep closeModal={closeModal} />}
            {(step === 1 || step === 2) && (
              <ContainerPrice>
                <div>
                  <HeaderText>Estimated Price</HeaderText>
                  <Price>$ {price.toFixed(2)}</Price>
                </div>
                <button
                  disabled={
                    step === 1 &&
                    Object.values(values).some(value => value === '')
                  }
                  onClick={() => {
                    if (step === 1) {
                      nextStep();
                    } else {
                      handleSubmit(values, price, setStep);
                    }
                  }}
                  type="button"
                  className="heroButton hvr-grow"
                >
                  {step === 1 ? 'Schedule cleaning' : 'Confirm cleaning'}{' '}
                </button>
              </ContainerPrice>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default PricingModal;
