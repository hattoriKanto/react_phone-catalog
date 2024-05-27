import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { Button, Grow, GrowProps } from '@mui/material';
import { isToastOpen } from '../../types';
import { ModalBox } from '../CartModal';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setIsToastOpen: (isToastOpen: isToastOpen) => void;
};

export const LogoutModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  setIsToastOpen,
}) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  function GrowTransition(props: GrowProps) {
    return <Grow {...props} />;
  }

  const onConfirm = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');

    setIsToastOpen({
      open: true,
      Transition: GrowTransition,
      message: 'You logged out',
      status: 'success',
    });

    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 800,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <ModalBox
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            gap={'16px'}
          >
            {' '}
            Are you sure?
            <Button
              onClick={onConfirm}
              sx={{
                margin: '0 auto',
                width: '100px',
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => setIsModalOpen(false)}
              sx={{
                margin: '0 auto',
                width: '100px',
              }}
            >
              No
            </Button>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
};
