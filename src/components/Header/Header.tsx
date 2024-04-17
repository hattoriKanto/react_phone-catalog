import React from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { HeaderOtherLinks } from '../../types/HeaderOtherLinks';

import {
  HeaderBar,
  HeaderContainer,
  HeaderNavigation,
  HeaderLinks,
  HeaderLogoLink,
} from './Styles';
import { NavMenu } from './NavMenu';
import { ActiveLink } from './ActiveLink';

export const Header: React.FC = () => {
  const locationPathname = useLocation().pathname;

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return locationPathname === HeaderOtherLinks.cart ? (
        <ShoppingCartIcon color="warning"></ShoppingCartIcon>
      ) : (
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
      );
    }

    return locationPathname === HeaderOtherLinks.favourites ? (
      <FavoriteIcon color="warning"></FavoriteIcon>
    ) : (
      <FavoriteBorderIcon></FavoriteBorderIcon>
    );
  };

  return (
    <HeaderBar>
      <HeaderContainer>
        <HeaderNavigation>
          <HeaderLogoLink to="">
            <Box
              component="img"
              src="./public/img/header/logo.svg"
              alt="Nice Gadget Logo"
            />
          </HeaderLogoLink>
          <NavMenu />
        </HeaderNavigation>
        <HeaderLinks>
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
        </HeaderLinks>
      </HeaderContainer>
    </HeaderBar>
  );
};
