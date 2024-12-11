import { Facebook, WhatsApp, Instagram } from '@mui/icons-material';
import SectionsContainer from '../SectionsContainer';
import { theme } from '../../theme';
import {
  HeaderContainer,
  ElementsContainer,
  Logo,
  LogoFirstPart,
  LogoSecondPart,
  NetworkContainer,
} from './Header.styled';

const socialNetworks = [
  {
    id: 1,
    path: 'https://www.facebook.com/profile.php?id=61570501701073',
    networkName: 'Facebook',
    icon: Facebook,
  },
  {
    id: 2,
    path: 'https://wa.me/3313156464',
    networkName: 'WhatsApp',
    icon: WhatsApp,
  },
  {
    id: 3,
    path: 'https://www.instagram.com/cryslal_clear/profilecard/?igsh=MTV5cTVmMzgweXBkMw==',
    networkName: 'Instagram',
    icon: Instagram,
  },
];

const Header = () => {
  return (
    <HeaderContainer>
      <SectionsContainer>
        <ElementsContainer>
          <Logo>
            <LogoFirstPart>Crystal</LogoFirstPart>
            <span> </span>
            <LogoSecondPart>Clear</LogoSecondPart>
          </Logo>
          <NetworkContainer>
            {socialNetworks.map(network => (
              <li key={network.id}>
                <a
                  className="hvr-grow"
                  href={network.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <network.icon
                    sx={{
                      fontSize: 32,
                      color: theme.colors.primary,
                    }}
                  />
                </a>
              </li>
            ))}
          </NetworkContainer>
        </ElementsContainer>
      </SectionsContainer>
    </HeaderContainer>
  );
};

export default Header;
