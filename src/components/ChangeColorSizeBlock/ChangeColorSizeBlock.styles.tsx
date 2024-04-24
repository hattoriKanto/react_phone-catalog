import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const Colors = styled(Box)({
  display: 'flex',
  gap: '8px',
  // justifyContent: 'space-between',
  // width: '152px',
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
    width: '287px',
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

export const Capacity = styled(Box)({
  padding: '8px',
  border: '1px solid #B4BDC3',
  borderRadius: '4px',
})

export const CapacityValue = styled('p')({
  fontFamily: 'Mont',
  fontSize: '14px',
  color: '#0F0F11',
  margin: 0,
  lineHeight: '10px',
})

export const ColWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1px solid #E2E6E9',
  marginBottom: '24px',
})

export const Color = styled('p')({
  // backgroundColor: '#FCDBC1',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '2px solid #FFFFFF',
})
