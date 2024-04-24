import React from 'react';
import { useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import {
  StyledAppBar,
  StyledFlexWrapper,
  StyledWrapper,
  StyledLogoLink,
  StyledBurgerButton,
  StyledLogo,
} from './Header.styles';
import { NavMenu } from './NavMenu';

import { NavBarButtons } from '.';
import { toggleBurgerMenu } from '../../functions/toggleBurgerMenu';
import Container from '../Container/Container';
import { Search } from './Search';

interface Props {
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
}

export const Header: React.FC<Props> = ({
  isBurgerMenuShown,
  onBurgerToggle,
}) => {
  // new
  const { pathname } = useLocation();
  const searchField =
    pathname === '/phones' ||
    pathname === '/tablets' ||
    pathname === '/accessories';

  return (
    <StyledAppBar>
      <Container>
        <StyledFlexWrapper>
          <StyledWrapper>
            <StyledLogoLink to="" onClick={() => onBurgerToggle(false)}>
              <StyledLogo src="img/header/logo.svg" alt="Nice Gadget Logo" />
            </StyledLogoLink>

            <NavMenu />
          </StyledWrapper>

          {/* new */}
          {searchField && <Search />}

          <NavBarButtons />

          <StyledBurgerButton
            disableElevation
            onClick={() => toggleBurgerMenu(onBurgerToggle, isBurgerMenuShown)}
          >
            {isBurgerMenuShown ? (
              <MenuOpenIcon
                color="primary"
                sx={{ width: '16px', height: '16px' }}
              ></MenuOpenIcon>
            ) : (
              <MenuIcon
                color="primary"
                sx={{ width: '16px', height: '16px' }}
              ></MenuIcon>
            )}
          </StyledBurgerButton>
        </StyledFlexWrapper>
      </Container>
    </StyledAppBar>
  );
};
