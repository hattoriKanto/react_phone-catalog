import { Stack, Typography } from '@mui/material';

type Props = {
  price: number;
  fullPrice: number;
};

export const PriceBlock: React.FC<Props> = ({ price, fullPrice }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: '800', fontSize: '32px' }}>
        ${price}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: '500',
          fontSize: '22px',
          color: '#89939A',
          textDecoration: 'line-through',
        }}
      >
        ${fullPrice}
      </Typography>
    </Stack>
  );
};
