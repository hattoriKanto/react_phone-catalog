import React from 'react';
import { Box } from '@mui/material';

import { NavList, NavListItem } from './Styles';
import { HeaderNavLinks } from '../../types/HeaderNavLinks';
import { ActiveLink } from './ActiveLink';

export const NavMenu: React.FC = () => {
  return (
    <Box component="nav">
      <NavList>
        {Object.entries(HeaderNavLinks).map(([text, link]) => (
          <NavListItem key={text}>
            <ActiveLink
              label={text}
              to={link}
              activeStyle={{
                borderBottom: '3px solid #0f0f11',
              }}
            />
          </NavListItem>
        ))}
      </NavList>
    </Box>
  );
};
