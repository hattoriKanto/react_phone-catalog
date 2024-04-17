import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import favouritesIcon from '../../../public/img/icons/favouritesIcon.svg';
import cartIcon from '../../../public/img/icons/cartIcon.svg';
import {
  StyledIconsContainer,
  StyledList,
  StyledListItem,
  StyledNavLink,
  StyledNavLinkBox,
  StyledRootContainer,
} from './BurgerMenuStyles';

const TABS = {
  HOME: '/home',
  PHONES: '/phones',
  TABLETS: '/tablets',
  ACCESSORIES: '/accessories',
};

export const HomePage: React.FC = () => {
  return (
    <StyledRootContainer disableGutters>
      {/* <Box sx={{ marginBottom: '24px' }}>
        <Header />
      </Box> */}

      <StyledList>
        {Object.entries(TABS).map(([title, path]) => (
          <StyledListItem key={title}>
            <StyledNavLink to={path}>{title}</StyledNavLink>
          </StyledListItem>
        ))}
      </StyledList>

      <StyledIconsContainer disableGutters>
        <StyledNavLinkBox>
          <NavLink to="/cart">
            <Box component="img" alt="Favourites menu" src={favouritesIcon} />
          </NavLink>
        </StyledNavLinkBox>
        <StyledNavLinkBox>
          <NavLink to="/cart">
            <Box
              component="img"
              // sx={{
              //   '& img': {
              //     color: 'red',
              //   },
              // }}
              alt="Cart menu"
              src={cartIcon}
            />
          </NavLink>
        </StyledNavLinkBox>
      </StyledIconsContainer>
    </StyledRootContainer>
  );
};
