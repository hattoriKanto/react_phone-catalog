import React, { useState } from 'react';
import { Box, Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomGrid } from '../CustomGrid';
import { useTheme } from '@mui/material/styles';
import { customBreakpoints } from '../../theme/breakpoints.config';

interface ImageGalleryProps {
  images: string[];
}

const ImageThumbnail = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  cursor: 'pointer',
  opacity: 0.6,
  '&:hover': {
    opacity: 1,
  },
});

const MainImage = styled('img')({
  width: '464px',
  height: '464px',
  objectFit: 'contain',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const ImagePaper = styled(Paper)({
  width: '80px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1.5px #E2E6E9 solid`,
  borderRadius: '4px',
  boxShadow: 'none',
});

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

  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <>
      <CustomGrid>
        {isMobile ? (
          <>
            <MainImage
              src={selectedImage}
              alt={selectedImage.split('/')[2].split('-').join(' ')}
            />
            <ImageBox
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              sx={{
                gap: '8px',
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
          </>
        ) : (
          <>
            <ImageBox
              display={'flex'}
              flexDirection={'column'}
              sx={{
                width: '82px',
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
              alt={selectedImage.split('/')[2].split('-').join(' ')}
            />
          </>
        )}
      </CustomGrid>
    </>
  );
};
