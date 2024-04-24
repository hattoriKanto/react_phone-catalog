import { CSSProperties } from 'react';
import { StyledLink } from '.';
import { Divider, Typography } from '@mui/material';

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

  return isJSXElem ? (
    <>
      <Divider
        orientation="vertical"
        sx={({ breakpoints }) => ({
          backgroundColor: 'secondary',
          height: '64px',
          [breakpoints.down('md')]: {
            height: '48px',
          },
        })}
      />
      <StyledLink
        to={to}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        sx={({ breakpoints }) => ({
          width: '64px',
          [breakpoints.down('md')]: {
            width: '48px',
          },
        })}
      >
        {label}
      </StyledLink>
    </>
  ) : (
    <StyledLink to={to}>
      {({ isActive }) => {
        return (
          <Typography
            variant="button"
            sx={{
              fontSize: '12px',
            }}
            color={isActive ? 'primary' : 'secondary'}
          >
            {label}
          </Typography>
        );
      }}
    </StyledLink>
  );
};
