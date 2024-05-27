import React, { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

import {
  StyledBurgerMenu,
  StyledBurgerFlexWrapper,
  StyledBurgerItem,
  StyledBurgerList,
  StyledBurgerNav,
} from './BurgerMenu.styles.tsx';
import { HeaderNavLinks } from '../../types/HeaderNavLinks.ts';
import { BurgerMenuButtons } from './BurgerMenuButtons.tsx';
import { BurgerActiveLink } from './BurgerActiveLink.tsx';
import { StyledHeaderIconButton } from '../Header/Header.styles.tsx';
import { LogoutModal } from '../LogoutModal/LogoutModal.tsx';
import { Toast } from '../Toast/Toast.tsx';
import { TransitionProps } from '@mui/material/transitions';
import { Grow } from '@mui/material';

export const BurgerMenu: React.FC = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [hasToken, setHasToken] = useState(!!localStorage.getItem('token'));
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

  useEffect(() => {
    const handleStorage = () => {
      setHasToken(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <>
      <Toast isToastOpen={isToastOpen} setIsToastOpen={setIsToastOpen} />
      <LogoutModal
        isModalOpen={isLogoutModalOpen}
        setIsModalOpen={setIsLogoutModalOpen}
        setIsToastOpen={setIsToastOpen}
      ></LogoutModal>
      <StyledBurgerMenu>
        <StyledBurgerFlexWrapper>
          {hasToken && (
            <StyledHeaderIconButton
              disableRipple
              onClick={() => setIsLogoutModalOpen(!isLogoutModalOpen)}
              sx={({ palette, breakpoints }) => ({
                position: 'absolute',
                bottom: 0,
                width: '100%',
                flexBasis: '100%',
                marginBottom: '4px',
                borderTop: `3px solid ${palette.element.main}`,
                maxHeight: '50px',
                [breakpoints.up('md')]: {
                  marginBottom: '20px',
                },
              })}
            >
              <LogoutIcon fontSize="large" />
            </StyledHeaderIconButton>
          )}
          <StyledBurgerNav>
            <StyledBurgerList>
              {Object.entries(HeaderNavLinks).map(([text, link]) => (
                <StyledBurgerItem key={text}>
                  <BurgerActiveLink label={text} to={link} />
                </StyledBurgerItem>
              ))}
            </StyledBurgerList>
          </StyledBurgerNav>
          <BurgerMenuButtons />
        </StyledBurgerFlexWrapper>
      </StyledBurgerMenu>
    </>
  );
};
