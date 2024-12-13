import { useState } from 'react';
import { Formik, Field } from 'formik';
import SectionsContainer from '../SectionsContainer';
import Modal from '../Modal';
import { theme } from '../../theme';
import {
  InfoContainer,
  MainText,
  FormSuspense,
  ModalHeader,
} from './Hero.styled';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    email: 'demon01133@gmail.com',
    message: '',
  };

  const handleSubmit = ({ resetForm }) => {
    resetForm();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section
        class="overlayHero"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <SectionsContainer>
          <InfoContainer>
            <MainText>Time to clean!</MainText>
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              class="heroButton hvr-grow"
            >
              Contact Us
            </button>
          </InfoContainer>
        </SectionsContainer>
      </section>

      {/* Modal window */}
      {isModalOpen && (
        <Modal size="small" onClose={() => setIsModalOpen(!isModalOpen)}>
          <ModalHeader>Contact Us</ModalHeader>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting, values }) => (
              <FormSuspense>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email">Email</label>
                  <Field
                    style={FieldStyles}
                    type="email"
                    id="email"
                    name="email"
                    readOnly={true}
                    placeholder="Enter your email"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="message">Message</label>
                  <Field
                    style={FieldStyles}
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  class="heroButton hvr-grow"
                  disabled={isSubmitting || !values.message.trim()}
                >
                  Submit
                </button>
              </FormSuspense>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};

export default Hero;

const FieldStyles = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '5px',
  border: `1px solid ${theme.colors.primary}`,
};
