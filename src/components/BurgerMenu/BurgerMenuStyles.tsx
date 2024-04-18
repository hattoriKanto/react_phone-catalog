import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { Container, styled } from '@mui/system';
import { customPalette } from '../../theme/palete.config.ts';

export const StyledRootContainer = styled(Container)({
  position: 'relative',
  width: '320px',
  height: '560px',
  border: '1px solid ${customPalette.element}',
});

export const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const StyledListItem = styled(ListItem)({
  justifyContent: 'center',
  padding: '0',
  cursor: 'pointer',
});

export const StyledNavLink = styled(NavLink)({
  color: `${customPalette.secondary}`,
  paddingBottom: '8px',
  borderBottom: '2px solid ${customPalette.white}',
  boxSizing: 'border-box',
  ':hover, :focus': {
    color: `${customPalette.primary}`,
    borderBottomColor: `${customPalette.primary}`,
  },
});

export const StyledIconsContainer = styled(Container)({
  position: 'absolute',
  bottom: 0,
  height: '70px',
  display: 'flex',
  border: '1px solid ${customPalette.element}',
});

export const StyledNavLinkBox = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: '0.5px solid ${customPalette.element}',
  ':hover, :focus': {
    borderBottom: '2px solid ${customPalette.main}',
  },
});
