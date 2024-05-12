import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';

import { fPercent, fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type ItemProps = {
  label: string;
  value: number;
  totalAmount: number;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  data: ItemProps[];
};

export default function EcommerceSalesOverview({ title, subheader, data, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={4} sx={{ px: 3, py: 4 }}>
        {data.map((progress) => (
          <ProgressItem key={progress.label} progress={progress} />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ProgressItemProps = {
  progress: ItemProps;
};

function ProgressItem({ progress }: ProgressItemProps) {
  return (
    <Stack spacing={1}>
      <Stack spacing={0.5} direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
        <Box component="span" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Box>
        <Box component="span">{fCurrency(progress.totalAmount)}</Box>
        <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
          ({fPercent(progress.value)})
        </Box>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={
          (progress.label === 'Total Income' && 'info') ||
          (progress.label === 'Total Expenses' && 'warning') ||
          'primary'
        }
        sx={{
          height: 8,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        }}
      />
    </Stack>
  );
}
