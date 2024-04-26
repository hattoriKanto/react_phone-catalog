import React, { useEffect, useState } from 'react';
import { Box, Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { customBreakpoints } from '../../theme/breakpoints.config';

interface ImageGalleryProps {
  images: string[];
}

const ImageThumbnail = styled('img')(({ theme }) => ({
  aspectRatio: '1 / 1',
  maxWidth: '80px',
  minWidth: '35px',
  objectFit: 'contain',
  cursor: 'pointer',
  opacity: 0.6,
  '&:hover': {
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '49px',
  },

  [theme.breakpoints.up('sm')]: {
    maxWidth: '40px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '80px',
  },
}));

const MainImage = styled('img')(({ theme }) => ({
  aspectRatio: '1 / 1',
  margin: '0 auto',
  objectFit: 'contain',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '288px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '288px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '484px',
  },
}));

const ImagePaper = styled(Paper)(({ theme }) => ({
  aspectRatio: '1 / 1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1.5px solid`,
  borderColor: theme.palette.element.main,
  borderRadius: '4px',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '49px',
  },

  [theme.breakpoints.up('sm')]: {
    maxWidth: '40px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '80px',
  },
}));

const ImageBox = styled(Box)({
  display: 'flex',
  overflowY: 'auto',
  maxHeight: 500,
  width: '100%',
});

export const ImageSelector: React.FC<ImageGalleryProps> = ({ images }) => {
  const { sm } = customBreakpoints.values;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(sm)); // up to 639p

  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <>
      {isMobile ? (
        <Box
          display={'flex'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          gap={'16px'}
          paddingBottom={'40px'}
        >
          <MainImage
            src={selectedImage}
            alt={selectedImage?.split('/')[2].split('-').join(' ')}
          />
          <ImageBox
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            sx={{
              gap: '8px',
              margin: '0 auto',
            }}
          >
            {images.map((image, index) => (
              <ImagePaper
                key={index}
                elevation={selectedImage === image ? 4 : 1}
                onClick={() => setSelectedImage(image)}
                sx={{
                  ...(selectedImage === image && {
                    borderColor: 'primary.main',
                  }),
                }}
              >
                <ImageThumbnail
                  src={image}
                  alt={`Thumbnail ${index}`}
                  sx={{
                    ...(selectedImage === image && {
                      opacity: 1,
                    }),
                  }}
                />
              </ImagePaper>
            ))}
          </ImageBox>
        </Box>
      ) : (
        <Box display={'flex'} flexDirection={'row'} gap={'16px'}>
          <ImageBox
            display={'flex'}
            flexDirection={'column'}
            sx={{
              maxWidth: '82px',
              minWidth: '35px',
              height: '100%',
              gap: '16px',
            }}
          >
            {images.map((image, index) => (
              <ImagePaper
                key={index}
                elevation={selectedImage === image ? 4 : 1}
                onClick={() => setSelectedImage(image)}
                sx={{
                  ...(selectedImage === image && {
                    borderColor: '#0F0F11',
                  }),
                }}
              >
                <ImageThumbnail
                  src={image}
                  alt={`Thumbnail ${index}`}
                  sx={{
                    ...(selectedImage === image && {
                      opacity: 1,
                    }),
                  }}
                />
              </ImagePaper>
            ))}
          </ImageBox>
          <MainImage
            src={selectedImage}
            alt={selectedImage?.split('/')[2].split('-').join(' ')}
            width={'100%'}
          />
        </Box>
      )}
    </>
  );
};
