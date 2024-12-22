import { LocationOn } from '@mui/icons-material';
import SectionsContainer from '../SectionsContainer';

import { theme } from '../../theme';
import { ListContainer, City } from './CompanyServices.styled';

const listLocations = [
  'Naperville',
  'Bolingbrook',
  'Lisle',
  'Woodridge',
  'Plainfield',
  'Warrenville',
  'Romeoville',
  'North Aurora',
  'Downers Grove',
  'West Chicago',
  'Darien',
  'Lemont',
  'Shamburg',
  'Orland Park',
  'Wheaton',
  'Westmont',
  'Aurora',
  'North Aurora',
  'Batavia',
];

const Locations = () => {
  return (
    <section className="locationSection overlayLocations">
      <SectionsContainer>
        <ListContainer>
          {listLocations.map(location => (
            <City>
              <LocationOn sx={{ color: theme.colors.primary }} />
              <p>{location}</p>
            </City>
          ))}
        </ListContainer>
      </SectionsContainer>
    </section>
  );
};

export default Locations;
