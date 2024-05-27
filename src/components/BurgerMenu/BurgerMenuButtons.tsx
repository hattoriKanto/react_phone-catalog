import { useLocation } from 'react-router-dom';
import { HeaderOtherLinks } from '../../types';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  StyledBurgerIconWrapper,
  StyledBurgerWrapperButton,
} from './BurgerMenu.styles';
import { BurgerActiveLink } from './BurgerActiveLink';
import React, { useState } from 'react';
import { Badge, Grow } from '@mui/material';
import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import { StyledHeaderIconButton } from '../Header';
import { TransitionProps } from '@mui/material/transitions';
import { AuthModal } from '../AuthModal';
import { Toast } from '../Toast';

export const BurgerMenuButtons: React.FC = () => {
  const { cartQuantity } = useCartContext();
  const { favoritesQuantity } = useFavoritesContext();
  const locationPathname = useLocation().pathname;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
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

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return (
        <Badge badgeContent={cartQuantity} color="info" max={99}>
          {locationPathname === HeaderOtherLinks.cart ? (
            <StyledBurgerIconWrapper>
              <ShoppingCartIcon
                sx={{ width: '100%', height: '100%' }}
                color="primary"
              />
            </StyledBurgerIconWrapper>
          ) : (
            <StyledBurgerIconWrapper>
              <ShoppingCartOutlinedIcon
                sx={{ width: '100%', height: '100%' }}
                color="primary"
              />
            </StyledBurgerIconWrapper>
          )}
        </Badge>
      );
    }

    return (
      <Badge badgeContent={favoritesQuantity} color="info" max={99}>
        {locationPathname === HeaderOtherLinks.favorites ? (
          <StyledBurgerIconWrapper>
            <FavoriteIcon
              sx={{ width: '100%', height: '100%' }}
              color="primary"
            />
          </StyledBurgerIconWrapper>
        ) : (
          <StyledBurgerIconWrapper>
            <FavoriteBorderIcon
              sx={{ width: '100%', height: '100%' }}
              color="primary"
            />
          </StyledBurgerIconWrapper>
        )}
      </Badge>
    );
  };

  return (
    <>
      <Toast isToastOpen={isToastOpen} setIsToastOpen={setIsToastOpen} />

      <AuthModal
        isModalOpen={isAuthModalOpen}
        setIsModalOpen={setIsAuthModalOpen}
        setIsToastOpen={setIsToastOpen}
      ></AuthModal>
      <StyledBurgerWrapperButton>
        {localStorage.getItem('token') ? (
          <>
            {Object.entries(HeaderOtherLinks).map(([text, link]) => {
              return (
                <BurgerActiveLink
                  key={text}
                  label={handleChangeIcon(link)}
                  to={link}
                />
              );
            })}
          </>
        ) : (
          <StyledHeaderIconButton
            disableRipple
            onClick={() => setIsAuthModalOpen(!isAuthModalOpen)}
            sx={{ width: 100, flexBasis: '100%', height: '80px' }}
          >
            <PersonOutlineIcon fontSize="large" />
          </StyledHeaderIconButton>
        )}
      </StyledBurgerWrapperButton>
    </>
  );
};
