import { StyledButton } from '../Header';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { StyledBurgerLink } from './BurgerMenu.styles';
import { toggleBurgerMenu } from '../../functions/toggleBurgerMenu';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ActiveLinkProps {
  label: string | JSX.Element;
  to: string;
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
}

export const BurgerActiveLink: React.FC<ActiveLinkProps> = ({
  label,
  to,
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
      theme={theme}
      issvg={isJSXElem.toString()}
      onClick={() => toggleBurgerMenu(onBurgerToggle, isBurgerMenuShown)}
    >
      {() => {
        return (
          <StyledButton disableElevation sx={{ height: '100%' }}>
            {label}
          </StyledButton>
        );
      }}
    </StyledBurgerLink>
  ) : (
    <StyledBurgerLink
      to={to}
      sx={{
        '&:hover svg': {
          transform: 'rotate(360deg)',
        },
      }}
      theme={theme}
      issvg={isJSXElem.toString()}
      onClick={() => toggleBurgerMenu(onBurgerToggle, isBurgerMenuShown)}
    >
      {({ isActive }) => {
        return (
          <Typography
            variant="button"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              fontWeight: '700',
              color: isActive ? primary : secondary,
            }}
          >
            <>
              <ArrowForwardIosIcon
                sx={{
                  width: '12px',
                  height: '12px',
                  transform: isActive ? 'rotate(360deg)' : 'rotate(180deg)',
                  transition: 'transform 500ms',
                }}
              />
              {label}
            </>
          </Typography>
        );
      }}
    </StyledBurgerLink>
  );
};
