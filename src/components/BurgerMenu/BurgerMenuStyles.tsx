import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { Container, styled } from '@mui/system';

export const StyledRootContainer = styled(Container)({
  position: 'relative',
  width: '320px',
  height: '560px',
  border: '1px solid #E2E6E9',
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
  fontWeight: '800',
  fontSize: '12px',
  lineHeight: '14px',
});

export const StyledNavLink = styled(NavLink)({
  color: '#89939A',
  paddingBottom: '8px',
  borderBottom: '2px solid white',
  boxSizing: 'border-box',
  ':hover, :focus': {
    color: 'black',
    borderBottomColor: 'black',
  },
});

export const StyledIconsContainer = styled(Container)({
  position: 'absolute',
  bottom: 0,
  height: '70px',
  display: 'flex',
  border: '1px solid #E2E6E9',
});

export const StyledNavLinkBox = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: '0.5px solid #E2E6E9',
  ':hover, :focus': {
    borderBottom: '2px solid black',
  },
});
