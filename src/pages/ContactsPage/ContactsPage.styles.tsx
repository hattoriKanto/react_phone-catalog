import { Box, styled } from '@mui/material';

export const ImageBox = styled(Box)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  width: '100%',
  display: 'block',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  borderRadius: '16px',

  [theme.breakpoints.up('xs')]: {
    backgroundImage: `url(img/ourstore_mobile.png)`,
    height: '100vw',
    marginBottom: '32px',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundImage: `url(img/ourstore_tablet.png)`,
    height: '320px',
  },
  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(img/ourstore.png)`,
    height: '425px',
    marginRight: '13px',
  },
}))

export const ContentBox = styled(Box)({
  boxSizing: 'border-box',
  border: '1px solid #E2E6E9',
  borderRadius: '16px',
  background: '#FFFFFF',
  padding: '16px',
  height: '330px',
  boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
})

export const LineBox = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #E2E6E9',
  marginBottom: '24px',

  [theme.breakpoints.up('md')]: {
    width: '320px',
  },
}));

export const ContactsWrapper = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'space-between',

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

