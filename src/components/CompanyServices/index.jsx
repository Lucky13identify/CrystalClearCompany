import { useState } from 'react';
import SectionsContainer from '../SectionsContainer';
import Modal from '../Modal';

import {
  CompanyServicesSection,
  HeaderText,
  CardContainer,
  CardText,
  MainTasksContainer,
  AdditionalTasksContainer,
  TasksContainer,
  ListContainer,
  OverlayCard,
  Text,
  HeaderTextModal,
} from './CompanyServices.styled';

const dataServices = [
  {
    id: 1,
    classOverlay: 'overlayServiceCardKitchen',
    alt: 'Kitchen',
    location: 'Kitchen',
    cleaningTasks: [
      'Vacuumed and washed floor',
      'Dust removed from baseboards',
      'Chairs and tables cleaned',
      'Appliance exteriors wiped',
      'Cleaned cabinet fronts',
      'Windowsills cleaned and blinds dusted',
      'Fingerprints removed from all surfaces',
      'Sinks scrubbed and disinfected',
      'Microwave exterior and interior cleaned',
      'Kitchen stove is washed outside and on top',
      'The refrigerator is cleaned and polished outside',
      'Washed large window inside',
      'Trash emptied',
    ],
    additionaOptions: [
      'Washing windows inside (standard height) and washing of entrance glass door',
      'Baseboards washing',
      'Washing kitchen stove inside',
      'Washing refrigerator inside',
      'Washing dishes',
    ],
  },
  {
    id: 2,
    classOverlay: 'overlayServiceCardBedroom',
    alt: 'Bedroom',
    location: 'Bedroom',
    cleaningTasks: [
      'Dust removed from surfaces, baseboards',
      'Dust removed from lamps and picture frames',
      'Windowsills and blinds dusted',
      'Floors vacuumed (and washed)',
      'Vacuumed under the bed (if accessible)',
      'Trash emptied',
    ],
    additionaOptions: [
      'Washing windows inside (standard height) and washing of entrance glass door',
      'Baseboards washing',
    ],
  },
  {
    id: 3,
    classOverlay: 'overlayServiceCardLivingRoom',
    alt: 'Living room',
    location: 'Living room',
    cleaningTasks: [
      'Removed cobwebs and dust from ceilings and walls',
      'Dust removed from the pictures and furniture (sofas, cabinets, tables)',
      'Ceiling fans dusted (standard height)',
      'Lamps and blinds are cleaned',
      'The floors vacuumed and washed',
      'The rugs are vacuumed',
      'Stairs vacuumed and/or washed',
      'Baseboards dusted',
      'Trash emptied',
    ],
    additionaOptions: [
      'Washing windows inside (standard height) and washing of entrance glass door',
      'Baseboards washing',
      'Vacuum the sofas and remove animal fur',
    ],
  },
  {
    id: 4,
    classOverlay: 'overlayServiceCardLaundry',
    alt: 'Laundry',
    location: 'Laundry',
    cleaningTasks: [
      'Dust removed from surfaces, baseboards, lamps',
      'Vacuumed and washed floor',
      'Thoroughly wiped and polished washing machine and dryer (outside)',
      'Trash emptied',
    ],
    additionaOptions: [
      'Washing windows inside (standard height) and washing of entrance glass door',
      'Baseboards washing',
    ],
  },
  {
    id: 5,
    classOverlay: 'overlayServiceCardBathroom',
    alt: 'Bathroom',
    location: 'Bathroom',
    cleaningTasks: [
      'Dust removed from surfaces, lamps and baseboards',
      'Thoroughly washed and disinfected the toilet, shower and/or tub',
      'Shower tiles scrubbed and disinfected',
      'Sinks scrubbed and disinfected',
      'Countertops washed (all items removed before that)',
      'Towels hung and folded',
      'Washed and polished mirrors',
      'Cabinet front cleaned',
      'Floor vacuumed and washed',
      'Trash emptied',
    ],
    additionaOptions: [
      'Washing windows inside (standard height) and washing of entrance glass door',
      'Baseboards washing',
    ],
  },
];

const CompanyServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = service => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  console.log(selectedService);

  return (
    <>
      <CompanyServicesSection>
        <SectionsContainer>
          <HeaderText>Cleaning planing</HeaderText>
          <CardContainer>
            {dataServices.map(
              ({
                id,
                location,
                alt,
                picture,
                cleaningTasks,
                additionaOptions,
                classOverlay,
              }) => (
                <li
                  className="cardService hvr-grow"
                  key={id}
                  onClick={() =>
                    handleCardClick({
                      id,
                      location,
                      alt,
                      picture,
                      cleaningTasks,
                      additionaOptions,
                      classOverlay,
                    })
                  }
                >
                  <OverlayCard className={classOverlay}></OverlayCard>

                  <CardText>{location}</CardText>
                </li>
              )
            )}
          </CardContainer>
        </SectionsContainer>
      </CompanyServicesSection>

      {/* Modal Window */}
      {selectedService && isModalOpen && (
        <Modal
          overlayClass={selectedService.classOverlay}
          onClose={() => setIsModalOpen(!isModalOpen)}
        >
          <HeaderTextModal>{selectedService.location}</HeaderTextModal>
          <TasksContainer>
            <MainTasksContainer>
              <p style={{ marginBottom: 20 }}>
                <strong>Cleaning Tasks:</strong>
              </p>
              <ListContainer>
                {selectedService.cleaningTasks.map((task, id) => (
                  <li key={id}>{task}</li>
                ))}
              </ListContainer>
            </MainTasksContainer>
            <div>
              <AdditionalTasksContainer>
                <Text>
                  <strong>Additional Options:</strong>
                </Text>
                <ListContainer>
                  {selectedService.additionaOptions.map((option, id) => (
                    <li key={id}>{option}</li>
                  ))}
                </ListContainer>
              </AdditionalTasksContainer>
            </div>
          </TasksContainer>
        </Modal>
      )}
    </>
  );
};

export default CompanyServices;
