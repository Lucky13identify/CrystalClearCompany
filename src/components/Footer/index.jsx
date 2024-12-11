import SectionsContainer from '../SectionsContainer';
import { theme } from '../../theme';
import {
  Logo,
  LogoFirstPart,
  LogoSecondPart,
  FooterSection,
  NetworkContainer,
  ElementsContainer,
} from './Footer.styled';
import { socialNetworks } from '../Header';

const Footer = () => {
  return (
    <FooterSection>
      <SectionsContainer>
        <ElementsContainer>
          <Logo>
            <LogoFirstPart>Crystal</LogoFirstPart>
            <span> </span>
            <LogoSecondPart>Clear</LogoSecondPart>
          </Logo>
          <p style={{ color: 'white' }}>
            Can’t find your town? We will help you! Write to us: 331 315 6464
          </p>
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
    </FooterSection>
  );
};

export default Footer;
