import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

import { customTypography } from '../../theme/typography.config';
import { Button, Grow, GrowProps, TextField } from '@mui/material';
import { useCartContext } from '../../hooks/useCartContext';
import { ChangeEvent, FormEvent, useState } from 'react';
import { StyledIconButton } from '../CartItem/CartItem';
import { DeleteIcon } from '../CartItem/CartItem.styles';
import { isToastOpen } from '../../types';
import { ModalBox } from '../CartModal';

const textBoxStyle = {
  m: '0 auto',
  display: 'flex',
  alignItems: 'flex-end',
  minWidth: '300px',
};

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setIsToastOpen: (isToastOpen: isToastOpen) => void;
};

export const AuthModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  setIsToastOpen,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let isValid = true;

  const [error, setError] = useState<string[]>([]);
  function GrowTransition(props: GrowProps) {
    return <Grow {...props} />;
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setError([]);
  };
  const { clearCart } = useCartContext();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name;
    const inputValue = e.target.value;

    switch (fieldName) {
      case 'name':
        setName(inputValue);
        setError(prev => prev.filter(item => item !== fieldName));

        break;
      case 'email':
        setEmail(inputValue);
        setError(prev => prev.filter(item => item !== fieldName));

        break;
      case 'password':
        setPassword(inputValue);
        setError(prev => prev.filter(item => item !== fieldName));

        break;
      default:
        return null;
    }
  };

  const validateField = (fieldName: string) => {
    switch (fieldName) {
      case 'name':
        return name.length === 0 && setError(prev => [...prev, fieldName]);
      case 'email':
        return email.length === 0 && setError(prev => [...prev, fieldName]);
      case 'password':
        return password.length === 0 && setError(prev => [...prev, fieldName]);
      case 'confimation':
        name.length === 0
          ? (setError(prev => [...prev, 'name']), (isValid = false))
          : null;
        email.length === 0
          ? (setError(prev => [...prev, 'email']), (isValid = false))
          : null;
        password.length === 0
          ? (setError(prev => [...prev, 'password']), (isValid = false))
          : null;

        break;
      default:
        return null;
    }
  };

  const onConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateField('confimation');

    if (isValid === true) {
      clearCart();
      setIsModalOpen(false);
      setIsToastOpen({
        open: true,
        Transition: GrowTransition,
        message: 'Success!',
        status: 'success',
      });
    }
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
                    left: '0',
                    top: '0',
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
                  Enter your info
                </Typography>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'row'}
                flexWrap={'wrap'}
                rowGap={'8px'}
              >
                <Box sx={textBoxStyle}>
                  <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField
                    error={error.includes('name')}
                    helperText={
                      error.includes('name') && 'Name must be correct'
                    }
                    autoComplete="name"
                    fullWidth
                    label="Name"
                    type="text"
                    id="fullWidth"
                    variant="standard"
                    required
                    value={name}
                    name="name"
                    onBlur={e => validateField(e.target.name)}
                    onChange={e => handleChange(e)}
                  />
                </Box>
                <Box sx={textBoxStyle}>
                  <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField
                    error={error.includes('email')}
                    helperText={
                      error.includes('email') && 'Email must be correct'
                    }
                    fullWidth
                    label="Email"
                    type="email"
                    id="fullWidth-error"
                    variant="standard"
                    required
                    value={email}
                    name="email"
                    onBlur={e => validateField(e.target.name)}
                    onChange={e => handleChange(e)}
                  />
                </Box>
                <Box sx={textBoxStyle}>
                  <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField
                    error={error.includes('password')}
                    helperText={
                      error.includes('password') && 'Password must be correct'
                    }
                    fullWidth
                    label="Password"
                    type="password"
                    id="fullWidth"
                    variant="standard"
                    required
                    value={password}
                    name="password"
                    onBlur={e => validateField(e.target.name)}
                    onChange={e => handleChange(e)}
                  />
                </Box>
              </Box>
              <Button
                variant="contained"
                color="accent"
                sx={{
                  mt: '32px',
                  width: '100%',
                  py: 1,
                  '&.MuiButton-contained': { color: 'white.main' },
                  textTransform: 'none',
                }}
                type="submit"
              >
                Confirm
              </Button>
            </form>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
};
