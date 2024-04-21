import { CSSProperties } from 'react';
import { StyledButton, StyledLink } from '.';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

interface ActiveLinkProps {
  label: string | JSX.Element;
  to: string;
  activeStyle: CSSProperties;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  label,
  to,
  activeStyle,
}) => {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const isJSXElem = typeof label !== 'string';

  return isJSXElem ? (
    <StyledLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      theme={theme}
      issvg={isJSXElem.toString()}
    >
      {() => {
        return (
          <StyledButton disableElevation disableRipple>
            {label}
          </StyledButton>
        );
      }}
    </StyledLink>
  ) : (
    <StyledLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      theme={theme}
      issvg={isJSXElem.toString()}
    >
      {({ isActive }) => {
        return (
          <Typography
            variant="button"
            sx={{
              fontSize: '12px',
              color: isActive ? primary : secondary,
            }}
          >
            {label}
          </Typography>
        );
      }}
    </StyledLink>
  );
};
