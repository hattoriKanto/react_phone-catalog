import { CSSProperties } from 'react';
import { HeaderNavButton, HeaderNavLinks } from '.';

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
      borderLeft={isJSXElem}
    >
      {({ isActive }) => (
        <HeaderNavButton
          disableElevation
          disableRipple
          color={isActive ? 'warning' : 'inherit'}
        >
          {label}
        </HeaderNavButton>
      )}
    </HeaderNavLinks>
  );
};
