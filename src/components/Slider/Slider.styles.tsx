import { Box, Button, styled } from '@mui/material';

export const Card = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
});

export const OrderButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: '15%',
  left: '5%',
  color: '#FFFFFF',
  border: '1px solid #89939A',
  borderRadius: '30px',

  '&:focus': {
    backgroundColor: '#F86800',
    border: 'none',
  },

  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    width: '95px',
    height: '30px',
    fontSize: '8px',
    display: 'initial',
  },
  [theme.breakpoints.up('md')]: {
    width: '200px',
    height: '60px',
    fontSize: '14px',
    display: 'initial',
  },
}));

export const SliderBanner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '8px',
  '.swiper': {
    borderRadius: '8px',
  },

  [theme.breakpoints.up('xs')]: {
    '.swiper': {
      width: '320px',
    },
  },

  [theme.breakpoints.up('sm')]: {
    '.swiper': {
      width: '490px',
      gap: '19px',
    },
  },

  [theme.breakpoints.up('md')]: {
    '.swiper': {
      width: '1040px',
    },
  },
}));

export const SwiperArrow = styled(Box)({
  '&::after': {
    content: 'none',
  },
  alignSelf: 'stretch',
  position: 'relative',
  height: 'auto',
  border: '1px solid #B2BDC3',
  borderRadius: '48px',
  top: 'unset !important',
  left: 'unset !important',
  bottom: 'unset !important',
  width: '32px !important',
  right: 'unset !important',
  margin: 0,
});

export const SliderImage = styled('img')({
  width: '100%',
});

export const SliderArrowIconRight = styled('img')({
  rotate: '180deg',
});

export const SwiperPaginationWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  top: 'unset !important',
  left: 'unset !important',
  bottom: 'unset !important',
  right: 'unset !important',
  '.swiper-pagination-bullet': {
    width: '14px',
    height: '4px',
    borderRadius: 'initial',
  },
  '.swiper-pagination-bullet-active': {
    backgroundColor: 'black',
  },
});

export const SliderArrowIcon = styled('img')({});
