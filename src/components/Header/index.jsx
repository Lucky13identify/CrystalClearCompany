import {
  Facebook,
  WhatsApp,
  Instagram,
  LocalPhone,
  MailOutline,
} from '@mui/icons-material';
import SectionsContainer from '../SectionsContainer';

import { theme } from '../../theme';
import {
  HeaderContainer,
  ElementsContainer,
  Logo,
  LogoFirstPart,
  LogoSecondPart,
  NetworkContainer,
  ContainerInfo,
  MailPhoneContainer,
  TextIconContainer,
  Link,
} from './Header.styled';

export const socialNetworks = [
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
          <ContainerInfo>
            <MailPhoneContainer>
              <TextIconContainer>
                <Link
                  className="hvr-grow"
                  href="mailto:crystalclear444you@gmail.com"
                >
                  <LocalPhone
                    sx={{
                      fontSize: 25,
                      color: theme.colors.primary,
                    }}
                  />
                  crystalclear444you@gmail.com
                </Link>
              </TextIconContainer>
              <TextIconContainer>
                <Link className="hvr-grow" href="tel:3313156464">
                  <MailOutline
                    sx={{
                      fontSize: 25,
                      color: theme.colors.primary,
                    }}
                  />
                  331 315 6464
                </Link>
              </TextIconContainer>
            </MailPhoneContainer>
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
          </ContainerInfo>
        </ElementsContainer>
      </SectionsContainer>
    </HeaderContainer>
  );
};

export default Header;
