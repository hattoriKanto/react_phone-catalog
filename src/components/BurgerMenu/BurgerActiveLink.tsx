import { CSSProperties } from 'react';
import { StyledButton } from '../Header';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { StyledBurgerLink } from './BurgerMenu.styles';
import { toggleBurgerMenu } from '../../functions/toggleBurgerMenu';

interface ActiveLinkProps {
  label: string | JSX.Element;
  to: string;
  activeStyle: CSSProperties;
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
}

export const BurgerActiveLink: React.FC<ActiveLinkProps> = ({
  label,
  to,
  activeStyle,
  isBurgerMenuShown,
  onBurgerToggle,
}) => {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const isJSXElem = typeof label !== 'string';

  return isJSXElem ? (
    <StyledBurgerLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      theme={theme}
      issvg={isJSXElem}
      onClick={() => toggleBurgerMenu(onBurgerToggle, isBurgerMenuShown)}
    >
      {() => {
        return (
          <StyledButton disableElevation disableRipple>
            {label}
          </StyledButton>
        );
      }}
    </StyledBurgerLink>
  ) : (
    <StyledBurgerLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      theme={theme}
      issvg={isJSXElem}
      onClick={() => toggleBurgerMenu(onBurgerToggle, isBurgerMenuShown)}
    >
      {({ isActive }) => {
        return (
          <Typography
            variant="button"
            sx={{
              fontSize: '12px',
              color: isActive ? primary : secondary,
              borderBottom: isActive
                ? '2px solid #0f0f11'
                : '2px solid transparent',
              '&:hover': {
                borderBottom: '2px solid #0f0f11',
              },
            }}
          >
            {label}
          </Typography>
        );
      }}
    </StyledBurgerLink>
  );
};
