import { CSSProperties } from 'react';
import { HeaderNavLinks } from '.';
import { Button, Typography } from '@mui/material';

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
  const isJSXElem = typeof label !== 'string';

  return (
    <HeaderNavLinks
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      borderleft={isJSXElem.toString()}
    >
      {({ isActive }) => {
        return !isJSXElem ? (
          <Typography
            color={isActive ? 'primary' : 'secondary'}
            variant="subtitle1"
          >
            {label}
          </Typography>
        ) : (
          <Button
            sx={{
              '&:hover': {
                background: 'transparent',
              },
            }}
            disableElevation
            disableRipple
          >
            {label}
          </Button>
        );
      }}
    </HeaderNavLinks>
  );
};
