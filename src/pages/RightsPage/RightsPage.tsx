import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '../../components/Container/Container.tsx';

export const RightsPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ pt: 4, marginBottom: '32px' }}>
        Rights and Permissions
      </Typography>
      <Box>
        <Typography variant="h4" sx={{ pt: 4, marginBottom: '32px', padding: 0}}>
          Details
        </Typography>
        <Typography variant="body1" sx={{ pt: 4, marginBottom: '32px', padding: 0 }}>
          If you have any questions concerning the use of Apple trademarks and/or the licensing of Apple copyrighted material (e.g., photographs, video footage, Apple advertisements or other Apple materials), please refer to Apple’s Guidelines for Using Apple Trademarks and Copyrights, or complete the online form.
          For use of Apple copyrighted material in third party works (e.g., books or publications), if applicable, please include the information below. Please note that upon receipt of your request, we may require additional information.
        </Typography>
      </Box>
    </Container>
  );
}
