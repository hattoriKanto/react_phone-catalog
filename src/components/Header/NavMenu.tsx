import React from 'react';

import { HeaderNavLinks } from '../../Types/HeaderNavLinks';
import { ActiveLink } from './ActiveLink';
import { StyledNav, StyledList, StyledItem } from '.';

export const NavMenu: React.FC = () => {
  return (
    <StyledNav>
      <StyledList>
        {Object.entries(HeaderNavLinks).map(([text, link]) => (
          <StyledItem key={text}>
            <ActiveLink
              label={text}
              to={link}
              activeStyle={{
                borderBottom: '3px solid #0f0f11',
              }}
            />
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};
