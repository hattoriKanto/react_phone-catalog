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

interface Props {
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({
  isBurgerMenuShown,
  onBurgerToggle,
}) => {
  return (
    <StyledBurgerMenu>
      <StyledBurgerFlexWrapper>
        <StyledBurgerNav>
          <StyledBurgerList>
            {Object.entries(HeaderNavLinks).map(([text, link]) => (
              <StyledBurgerItem key={text}>
                <BurgerActiveLink
                  label={text}
                  to={link}
                  isBurgerMenuShown={isBurgerMenuShown}
                  onBurgerToggle={onBurgerToggle}
                />
              </StyledBurgerItem>
            ))}
          </StyledBurgerList>
        </StyledBurgerNav>
        <BurgerMenuButtons
          isBurgerMenuShown={isBurgerMenuShown}
          onBurgerToggle={onBurgerToggle}
        />
      </StyledBurgerFlexWrapper>
    </StyledBurgerMenu>
  );
};
