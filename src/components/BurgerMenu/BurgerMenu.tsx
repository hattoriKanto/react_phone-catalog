import React from 'react';
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

export const BurgerMenu: React.FC = () => {
  return (
    <StyledBurgerMenu>
      <StyledBurgerFlexWrapper>
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
  );
};
