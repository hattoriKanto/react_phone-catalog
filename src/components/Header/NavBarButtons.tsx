import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';

import { HeaderOtherLinks } from '../../types';
import {
  ActiveLink,
  DesktopButtonsWrapper,
  StyledBurgerButton,
  StyledHeaderIconButton,
  StyledWrapperButton,
} from '.';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import Badge from '@mui/material/Badge';
import { Search } from './Search';
import { toggleBurgerMenu } from '../../functions';
import { useSearchContext } from '../../hooks/useSearchContext';
import { useBurgerMenuContext } from '../../hooks/useBurgerMenuContext';
import { Divider, Grow } from '@mui/material';
import { AuthModal } from '../AuthModal';
import { TransitionProps } from '@mui/material/transitions';
import { Toast } from '../Toast';
import { LogoutModal } from '../LogoutModal';

interface Props {
  searchField: boolean;
}

export const NavBarButtons: React.FC<Props> = ({ searchField }) => {
  const locationPathname = useLocation().pathname;
  const { cartQuantity } = useCartContext();
  const { favoritesQuantity } = useFavoritesContext();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<
          React.ReactNode,
          string | React.JSXElementConstructor<React.ReactNode>
        >;
      }
    >;
    message: string;
    status: 'warning' | 'success' | 'error' | null;
  }>({
    open: false,
    Transition: Grow,
    message: '',
    status: null,
  });

  const { isSearchOpen, setIsSearchOpen, handleClearSearch } =
    useSearchContext();
  const { isBurgerMenuShown, setIsBurgerMenuShown } = useBurgerMenuContext();

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return (
        <Badge badgeContent={cartQuantity} color="info" max={99}>
          {locationPathname === HeaderOtherLinks.cart ? (
            <ShoppingCartIcon
              color="primary"
              sx={{ width: '20px', height: '20px' }}
            ></ShoppingCartIcon>
          ) : (
            <ShoppingCartOutlinedIcon
              color="primary"
              sx={{ width: '20px', height: '20px' }}
            ></ShoppingCartOutlinedIcon>
          )}
        </Badge>
      );
    }

    return (
      <Badge badgeContent={favoritesQuantity} color="info" max={99}>
        {locationPathname === HeaderOtherLinks.favorites ? (
          <FavoriteIcon
            color="primary"
            sx={{ width: '20px', height: '20px' }}
          ></FavoriteIcon>
        ) : (
          <FavoriteBorderIcon
            color="primary"
            sx={{ width: '20px', height: '20px' }}
          ></FavoriteBorderIcon>
        )}
      </Badge>
    );
  };

  return (
    <StyledWrapperButton>
      {searchField && <Search />}

      <DesktopButtonsWrapper>
        <Toast isToastOpen={isToastOpen} setIsToastOpen={setIsToastOpen} />

        <Divider
          orientation="vertical"
          sx={({ breakpoints }) => ({
            backgroundColor: 'secondary',
            height: '64px',
            [breakpoints.down('md')]: {
              height: '48px',
            },
          })}
        />

        <AuthModal
          isModalOpen={isAuthModalOpen}
          setIsModalOpen={setIsAuthModalOpen}
          setIsToastOpen={setIsToastOpen}
        ></AuthModal>

        <LogoutModal
          isModalOpen={isLogoutModalOpen}
          setIsModalOpen={setIsLogoutModalOpen}
          setIsToastOpen={setIsToastOpen}
        ></LogoutModal>

        {!localStorage.getItem('token') ? (
          <StyledHeaderIconButton
            disableRipple
            onClick={() => setIsAuthModalOpen(!isAuthModalOpen)}
          >
            <PersonOutlineIcon />
          </StyledHeaderIconButton>
        ) : (
          <>
            {Object.entries(HeaderOtherLinks).map(([text, link]) => {
              return (
                <ActiveLink
                  key={text}
                  label={handleChangeIcon(link)}
                  to={link}
                />
              );
            })}

            <Divider
              orientation="vertical"
              sx={({ breakpoints }) => ({
                backgroundColor: 'secondary',
                height: '64px',
                [breakpoints.down('md')]: {
                  height: '48px',
                },
              })}
            />

            <StyledHeaderIconButton
              disableRipple
              onClick={() => setIsLogoutModalOpen(!isLogoutModalOpen)}
            >
              <LogoutIcon />
            </StyledHeaderIconButton>
          </>
        )}
      </DesktopButtonsWrapper>

      <Divider
        orientation="vertical"
        sx={({ breakpoints }) => ({
          backgroundColor: 'secondary',
          height: '64px',
          [breakpoints.down('md')]: {
            height: '48px',
          },
        })}
      />

      <StyledBurgerButton
        disableRipple
        disableElevation
        onClick={() => {
          toggleBurgerMenu(setIsBurgerMenuShown, isBurgerMenuShown);
          if (isSearchOpen) {
            setIsSearchOpen(false);
            handleClearSearch();
          }
        }}
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
    </StyledWrapperButton>
  );
};
