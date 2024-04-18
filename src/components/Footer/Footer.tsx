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

const Footer = () => (
    <StyledFooter component="footer">
      <Container>
        <FooterContent>
          <FooterLogoLink to="/">
            <img src="img/logo.svg" alt="" />
          </FooterLogoLink>
          <FooterLinks
            spacing={{ xs: 2, md: 13 }}
            direction={{ xs: 'column', sm: 'row' }}
          >
            <FooterLink to="/">
              Github
            </FooterLink>
            <FooterLink to="/">
              Contact
            </FooterLink>
            <FooterLink to="/">
              Rights
            </FooterLink>
          </FooterLinks>
          <BackToTopButton to="#root">
            Back to top
            <ButtonToTopIcon src="img/back-to-top-button.svg" />
          </BackToTopButton>
        </FooterContent>
      </Container>
    </StyledFooter>
);

export default Footer;
