import React from 'react';
import { useLocation } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import {
  StyledAppBar,
  StyledFlexWrapper,
  StyledWrapperButton,
  StyledWrapper,
  StyledLogoLink,
  StyledBurgerButton,
  StyledLogo,
} from './Header.styles';
import { NavMenu } from './NavMenu';
import { ActiveLink } from './ActiveLink';
import { HeaderOtherLinks } from '../../Types/HeaderOtherLinks';
import Container from '../Container/Container';

export const Header: React.FC = () => {
  const locationPathname = useLocation().pathname;

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return locationPathname === HeaderOtherLinks.cart ? (
        <ShoppingCartIcon
          color="primary"
          sx={{ width: '16px', height: '16px' }}
        ></ShoppingCartIcon>
      ) : (
        <ShoppingCartOutlinedIcon
          color="primary"
          sx={{ width: '16px', height: '16px' }}
        ></ShoppingCartOutlinedIcon>
      );
    }

    return locationPathname === HeaderOtherLinks.favourites ? (
      <FavoriteIcon
        color="primary"
        sx={{ width: '16px', height: '16px' }}
      ></FavoriteIcon>
    ) : (
      <FavoriteBorderIcon
        color="primary"
        sx={{ width: '16px', height: '16px' }}
      ></FavoriteBorderIcon>
    );
  };

  return (
    <StyledAppBar>
      <Container>
        <StyledFlexWrapper>
          <StyledWrapper>
            <StyledLogoLink to="">
              <StyledLogo src="img/header/logo.svg" alt="Nice Gadget Logo" />
            </StyledLogoLink>

            <NavMenu />
          </StyledWrapper>

          <StyledWrapperButton>
            {Object.entries(HeaderOtherLinks).map(([text, link]) => {
              return (
                <ActiveLink
                  key={text}
                  label={handleChangeIcon(link)}
                  to={link}
                  activeStyle={{
                    borderBottom: '3px solid #0f0f11',
                  }}
                />
              );
            })}
          </StyledWrapperButton>

          <StyledBurgerButton disableElevation disableRipple>
            <MenuIcon
              color="primary"
              sx={{ width: '16px', height: '16px' }}
            ></MenuIcon>
          </StyledBurgerButton>
        </StyledFlexWrapper>
      </Container>
    </StyledAppBar>
  );
};
