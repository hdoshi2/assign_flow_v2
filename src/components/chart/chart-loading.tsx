import Skeleton from '@mui/material/Skeleton';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export function ChartLoading({ sx, ...other }: StackProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 0.5,
        top: 0,
        left: 0,
        width: 1,
        zIndex: 9,
        height: 1,
        position: 'absolute',
        borderRadius: 'inherit',
        ...sx,
      }}
      {...other}
    >
      <Skeleton variant="rectangular" sx={{ width: 1, height: 1, borderRadius: 'inherit' }} />
    </Stack>
  );
}
