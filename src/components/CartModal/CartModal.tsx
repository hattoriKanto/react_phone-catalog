import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { customTypography } from '../../theme/typography.config';
import { Button, Grow, GrowProps, styled } from '@mui/material';
import { FormEvent } from 'react';
import { StyledIconButton } from '../CartItem/CartItem';
import { DeleteIcon } from '../CartItem/CartItem.styles';
import { isToastOpen } from '../../types';
import { deleteAll, getUserCart } from '../../utils';
import { useCartContext } from '../../hooks/useCartContext';

export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  border: '2px solid',
  borderColor: theme.palette.element.main,
  borderRadius: '16px',
  boxShadow: '24px',
  padding: '32px',
}));

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setIsToastOpen: (isToastOpen: isToastOpen) => void;
};

export const CartModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  setIsToastOpen,
}) => {
  const { setCart } = useCartContext();

  function GrowTransition(props: GrowProps) {
    return <Grow {...props} />;
  }

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onConfirm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await deleteAll();
    setCart(await getUserCart());
    setIsModalOpen(false);
    setIsToastOpen({
      open: true,
      Transition: GrowTransition,
      message: 'Success!',
      status: 'success',
    });
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
          <ModalBox>
            <form onSubmit={onConfirm} onInvalid={onConfirm}>
              <Box
                position={'relative'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <StyledIconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    left: '-30px',
                    top: '-30px',
                  }}
                >
                  <DeleteIcon />
                </StyledIconButton>
                <Typography
                  variant="h2"
                  textAlign={'center'}
                  gutterBottom
                  sx={customTypography.h2}
                >
                  Are you sure?
                </Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                gap={'10%'}
              >
                <Button
                  variant="contained"
                  color="accent"
                  sx={{
                    mt: '32px',
                    width: '45%',
                    py: 1,
                    '&.MuiButton-contained': { color: 'white.main' },
                    textTransform: 'none',
                  }}
                  type="submit"
                >
                  Yes
                </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="accent"
                  sx={{
                    mt: '32px',
                    width: '45%',
                    py: 1,
                    '&.MuiButton-contained': { color: 'white.main' },
                    textTransform: 'none',
                  }}
                  type="button"
                >
                  No
                </Button>
              </Box>
            </form>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
};
