import { Box, Typography } from '@mui/material';
import { Category } from '../../types/Category';

type Props = {
  category: Category;
};

export const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <Box key={category.id}>
      <Box
        sx={{
          width: '368px',
          height: '368px',
          borderRadius: '8px',
          position: 'relative',
          bgcolor: category.background,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={category.img}
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            objectPosition: '0 80px',
            transform: 'scale(1) translate(20%)',
          }}
        ></Box>
      </Box>
      <Typography variant="h3" sx={{ pt: '24px' }}>
        {category.name}
      </Typography>
      <Typography variant="body2" color="secondary" sx={{ pt: '4px' }}>
        {category.amount} models
      </Typography>
    </Box>
  );
};
