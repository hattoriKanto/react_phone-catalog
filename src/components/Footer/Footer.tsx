import Container from '../Container/Container';
import {
  BackToTopButton,
  Footer as StyledFooter,
  FooterContent,
  FooterLogoLink,
  FooterLinks,
  FooterLink,
  ButtonToTopIcon,
} from './Footer.styles';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container>
        <FooterContent>
          <FooterLogoLink to="/">
            <img src="img/logo.svg" alt="Logo Nice gadget" />
          </FooterLogoLink>
          <FooterLinks
            spacing={{ xs: 2, md: 13 }}
            direction={{ xs: 'column', sm: 'row' }}
          >
            <FooterLink to="/" >
             <Typography variant="button">
               Github
             </Typography>
            </FooterLink>
            <FooterLink to="/contacts" >
              <Typography variant="button">
                Contacts
              </Typography>
            </FooterLink>
            <FooterLink to="/rights" >
              <Typography variant="button">
                Rights
              </Typography>
            </FooterLink>
          </FooterLinks>
          <BackToTopButton to="#root" >
            <Typography variant="caption">
              Back to top
            </Typography>
            <ButtonToTopIcon src="img/back-to-top-button.svg" />
          </BackToTopButton>
        </FooterContent>
      </Container>
    </StyledFooter>
  )
};

export default Footer;
