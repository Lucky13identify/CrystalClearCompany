import { useState } from 'react';
import { Formik } from 'formik';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { FormSuspense } from './PricingModal.styled';

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
};

const PricingModal = ({ handleSubmit }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, values }) => (
        <FormSuspense>
          {/* {step === 1 && (
            <FirstStep
              isSubmitting={isSubmitting}
              values={values}
              nextStep={nextStep}
            />
          )} */}
          {step === 2 && (
            <SecondStep isSubmitting={isSubmitting} values={values} />
          )}
        </FormSuspense>
      )}
    </Formik>
  );
};

export default PricingModal;
