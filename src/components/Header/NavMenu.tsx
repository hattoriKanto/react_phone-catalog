import React from 'react';
import { Box, ListItem } from '@mui/material';

import { HeaderNavLinks } from '../../Types/HeaderNavLinks';
import { ActiveLink } from './ActiveLink';
import { NavList } from '.';

export const NavMenu: React.FC = () => {
  return (
    <Box component="nav">
      <NavList style={{ padding: 0 }}>
        {Object.entries(HeaderNavLinks).map(([text, link]) => (
          <ListItem key={text} style={{ padding: 0 }}>
            <ActiveLink
              label={text}
              to={link}
              activeStyle={{
                borderBottom: '3px solid #0f0f11',
              }}
            />
          </ListItem>
        ))}
      </NavList>
    </Box>
  );
};
