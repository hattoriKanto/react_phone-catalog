import { styled } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Colors = styled(Box)({
  display: 'flex',
  gap: '8px',
})

export const OptionsTitle = styled(Box)({
  marginTop: 0,
  marginBottom: '8px',
  fontFamily: 'Mont',
  fontSize: '12px',
  color: '#89939A'
})

export const LineBox = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #E2E6E9',
  marginBottom: '24px',

  [theme.breakpoints.up('sm')]: {
    width: '237px',
  },

  [theme.breakpoints.up('md')]: {
    width: '320px',
  },
}));

export const Capacityes = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginBottom: '24px',
})

export const Capacity = styled(Link)({
  padding: '8px',
  border: '1px solid #B4BDC3',
  borderRadius: '4px',
  color: '#0F0F11',
  textDecoration: 'none',
  cursor: 'pointer',

  '&.active': {
    border: '1px solid #0F0F11',
    color: '#FFFFFF',
    backgroundColor: '#0F0F11'
  },
})

export const CapacityValue = styled('p')({
  fontFamily: 'Mont',
  fontSize: '14px',
  margin: 0,
  lineHeight: '10px',
})

export const ColorWrapper = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1px solid #E2E6E9',
  marginBottom: '24px',
  cursor: 'pointer',

  '&.active': {
    border: '1px solid #0F0F11'
  },
})

export const Color = styled('p')({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '2px solid #FFFFFF',
})
