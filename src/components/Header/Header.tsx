import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  StyledAppBar,
  StyledFlexWrapper,
  StyledWrapper,
  StyledLogoLink,
  StyledLogo,
} from './Header.styles';
import { NavMenu } from './NavMenu';

import Container from '../Container/Container';
import { NavBarButtons } from '.';

interface Props {
  isSearchOpen: boolean;
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
  onSearchToggle: (isSearchOpen: boolean) => void;
  handleSearchIconClick: () => void;
}

export const Header: React.FC<Props> = ({
  isSearchOpen,
  isBurgerMenuShown,
  onBurgerToggle,
  onSearchToggle,
  handleSearchIconClick,
}) => {
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
            <StyledLogoLink
              sx={({ breakpoints }) => ({
                [breakpoints.down('sm')]: {
                  opacity: isSearchOpen ? 0 : 1,
                },
              })}
              to=""
              onClick={() => onBurgerToggle(false)}
            >
              <StyledLogo src="img/header/logo.svg" alt="Nice Gadget Logo" />
            </StyledLogoLink>

            <NavMenu />
          </StyledWrapper>

          <NavBarButtons
            searchField={searchField}
            isSearchOpen={isSearchOpen}
            isBurgerMenuShown={isBurgerMenuShown}
            onBurgerToggle={onBurgerToggle}
            onSearchToggle={onSearchToggle}
            handleSearchIconClick={handleSearchIconClick}
          />
        </StyledFlexWrapper>
      </Container>
    </StyledAppBar>
  );
};
