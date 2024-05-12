import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Paper, { PaperProps } from '@mui/material/Paper';

// ----------------------------------------------------------------------

export function KanbanColumnSkeleton({
  amount = 4,
  sx,
  ...other
}: PaperProps & {
  amount?: number;
}) {
  return [...Array(amount)].map((_, index) => (
    <Paper
      key={index}
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={2} sx={{ width: 280 }}>
        <Skeleton sx={{ pt: '75%', borderRadius: 1.5 }} />
        {[0].includes(index) && <Skeleton sx={{ pt: '50%', borderRadius: 1.5 }} />}
        {[0, 1].includes(index) && <Skeleton sx={{ pt: '25%', borderRadius: 1.5 }} />}
        {[0, 1, 2].includes(index) && <Skeleton sx={{ pt: '25%', borderRadius: 1.5 }} />}
      </Stack>
    </Paper>
  ));
}
