import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { isToastOpen } from '../../types';

type Props = {
  isToastOpen: isToastOpen;
  setIsToastOpen: (isToastOpen: isToastOpen) => void;
};

export const Toast: React.FC<Props> = ({ isToastOpen, setIsToastOpen }) => {
  const handleClose = () => {
    setIsToastOpen({
      ...isToastOpen,
      open: false,
    });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isToastOpen.open}
        onClose={handleClose}
        TransitionComponent={isToastOpen.Transition}
        key={isToastOpen.Transition.name}
        autoHideDuration={1200}
      >
        <Alert
          onClose={handleClose}
          severity={isToastOpen.status ? isToastOpen.status : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {isToastOpen.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
