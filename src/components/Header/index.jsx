import { Facebook, WhatsApp, Instagram } from '@mui/icons-material';
import SectionsContainer from '../SectionsContainer';
import { HeaderContainer, ElementsContainer } from './Header.styled';

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
          <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: 34 }}>
            <span style={{ color: '#9932CC' }}>Crystal</span>
            <span> </span>
            <span
              style={{
                backgroundColor: '#9932CC',
                color: 'white',
                padding: 6,
                borderRadius: 12,
              }}
            >
              Clear
            </span>
          </p>
          <ul style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
            {socialNetworks.map(network => (
              <li key={network.id}>
                <a
                  href={network.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <network.icon style={{ fontSize: 30, color: '#9932CC' }} />
                </a>
              </li>
            ))}
          </ul>
        </ElementsContainer>
      </SectionsContainer>
    </HeaderContainer>
  );
};

export default Header;
