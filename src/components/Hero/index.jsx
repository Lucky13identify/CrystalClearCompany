import { useState } from 'react';
import SectionsContainer from '../SectionsContainer';
import Modal from '../Modal';
import PricingModal from '../PricingModal';

import { InfoContainer, MainText } from './Hero.styled';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values, price, setStep) => {
    try {
      const enrichedValues = {
        ...values,
        price: `$${price}`,
        access_key: '5853be5f-0678-42ab-b543-aa07f435d14c',
      };

      const json = JSON.stringify(enrichedValues);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        setStep(prevStep => prevStep + 1);
      } else {
        setStep(prevStep => prevStep + 2);
      }
    } catch (error) {
      setStep(prevStep => prevStep + 2);
    }
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
              Book now!
            </button>
          </InfoContainer>
        </SectionsContainer>
      </section>

      {/* Modal window */}
      {isModalOpen && (
        <Modal size="big" onClose={() => setIsModalOpen(!isModalOpen)}>
          <PricingModal
            handleSubmit={handleSubmit}
            closeModal={() => setIsModalOpen(!isModalOpen)}
          />
        </Modal>
      )}
    </>
  );
};

export default Hero;
