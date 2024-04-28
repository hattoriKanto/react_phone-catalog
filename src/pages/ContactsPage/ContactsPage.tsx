import React from 'react';
import Container from '../../components/Container/Container.tsx';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ContactsWrapper, ContentBox, ImageBox, LineBox } from './ContactsPage.styles.tsx';

export const ContactsPage: React.FC = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Container>
      <Stack sx={{marginBottom: '96px'}}>
        <Typography variant="h1" sx={{ pt: 4, marginBottom: '32px' }}>
          Contacts
        </Typography>
        <ContactsWrapper>
          <ImageBox />
          <ContentBox>
            <Box sx={{marginBottom: '28px', marginTop: '16px'}}>
              <Typography variant="h4" sx={{ pt: 4, padding: 0 }}>
                MADRID, CLAUDIO COELLO
              </Typography>
            </Box>
            <Box sx={{marginBottom: '32px'}}>
              <Typography variant="body1" sx={{ pt: 4, padding: 0 }}>
                Calle Claudio Coello, 44 <br />
                28001, Madrid, Spain. <br />
                Tel: +34 917 82 29 68 <br />
                Monday to Saturday <br />
                10AM - 9PM <br />
              </Typography>
            </Box>
            <LineBox />
            <Button
              variant={'contained'}
              onClick={() => openInNewTab("http://surl.li/szmpi")}
              color="accent"
              sx={{
                width: '100%',
                minWidth: '180px',
                height: '48px',
                py: 1,
                '&.MuiButton-contained': { color: '#fff' },
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Typography
                variant="button"
                color="white"
                sx={{ textTransform: 'none', textDecoration: 'none' }}
              >
                Contact the Store
              </Typography>
            </Button>
          </ContentBox>
        </ContactsWrapper>
      </Stack>
    </Container>
  )
}

