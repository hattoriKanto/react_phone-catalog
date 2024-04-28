import React from 'react';

import { ActiveLink } from './ActiveLink';
import { StyledNav, StyledList, StyledItem } from '.';
import { HeaderNavLinks } from '../../types';

export const NavMenu: React.FC = () => {
  return (
    <StyledNav>
      <StyledList>
        {Object.entries(HeaderNavLinks).map(([text, link]) => (
          <StyledItem key={text}>
            <ActiveLink label={text} to={link} />
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};
