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

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container>
        <FooterContent>
          <FooterLogoLink to="/">
            <img src="img/logo.svg" alt="" />
          </FooterLogoLink>
          <FooterLinks
            spacing={{ mobile: 2, desktop: 13 }}
            direction={{ mobile: 'column', tablet: 'row' }}
          >
            <FooterLink to="/" className={'footer-link'}>
              Github
            </FooterLink>
            <FooterLink to="/" className={'footer-link'}>
              Contact
            </FooterLink>
            <FooterLink to="/" className={'footer-link'}>
              Rights
            </FooterLink>
          </FooterLinks>
          <BackToTopButton href="#root">
            Back to top
            <ButtonToTopIcon src="img/back-to-top-button.svg" />
          </BackToTopButton>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
