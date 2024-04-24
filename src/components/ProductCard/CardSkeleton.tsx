import Card from '@mui/material/Card';
import { Box, CardContent, Divider, Skeleton, Stack } from '@mui/material';

export const CardSkeleton = () => {
  return (
    <Card
      sx={{
        boxSizing: 'border-box',
        maxWidth: 272,
        maxHeight: 506,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: '#E2E6E9',
      }}
    >
      <CardContent sx={{ m: 1, p: '32px' }}>
        <Skeleton
          variant="rounded"
          animation="wave"
          width="100%"
          height={196}
        />
        <Box
          height={36}
          sx={{
            pt: 1,
            pb: 1,
          }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height={40}
          />
        </Box>

        <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 1 }}>
          <Skeleton variant="rounded" animation="wave" width={50} height={40} />
          <Skeleton variant="rounded" animation="wave" width={50} height={40} />
        </Stack>

        <Divider />

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: 'space-between', pt: 2 }}
        >
          <Skeleton variant="rounded" animation="wave" width={50} height={18} />
          <Skeleton
            variant="rounded"
            animation="wave"
            width={125}
            height={18}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: 'space-between', pt: 0.5 }}
        >
          <Skeleton variant="rounded" animation="wave" width={70} height={18} />
          <Skeleton variant="rounded" animation="wave" width={50} height={18} />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: 'space-between', pt: 0.5 }}
        >
          <Skeleton variant="rounded" animation="wave" width={40} height={19} />
          <Skeleton variant="rounded" animation="wave" width={40} height={19} />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width={160}
            height={50}
          />
          <Skeleton
            variant="circular"
            animation="wave"
            width={40}
            height={40}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};
