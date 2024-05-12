import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  data: {
    value: number;
    status: string;
    quantity: number;
  }[];
};

export default function BookingBooked({ title, subheader, data, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {data.map((progress) => (
          <Stack key={progress.status} spacing={1}>
            <Stack direction="row" alignItems="center">
              <Box sx={{ typography: 'overline', flexGrow: 1 }}>{progress.status}</Box>
              <Box sx={{ typography: 'subtitle1' }}>{fShortenNumber(progress.quantity)}</Box>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={progress.value}
              sx={{
                height: 8,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.16),
                [`& .${linearProgressClasses.bar}`]: {
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
                  ...(progress.status === 'Pending' && {
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.main} 100%)`,
                  }),
                  ...(progress.status === 'Canceled' && {
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.error.light} 0%, ${theme.palette.error.main} 100%)`,
                  }),
                },
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
