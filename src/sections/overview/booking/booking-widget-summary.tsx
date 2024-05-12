import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card, { CardProps } from '@mui/material/Card';

import { fPercent, fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------
import Iconify from 'src/components/iconify';

type Props = CardProps & {
  title: string;
  total: number;
  percent: number;
  icon: React.ReactElement;
};

export default function BookingWidgetSummary({ title, percent, total, icon, sx, ...other }: Props) {
  const renderTrending = (
    <Stack spacing={0.5} direction="row" alignItems="center">
      <Iconify
        width={24}
        icon={
          percent < 0
            ? 'solar:double-alt-arrow-down-bold-duotone'
            : 'solar:double-alt-arrow-up-bold-duotone'
        }
        sx={{
          flexShrink: 0,
          color: 'success.main',
          ...(percent < 0 && {
            color: 'error.main',
          }),
        }}
      />
      <Box sx={{ typography: 'subtitle2' }}>
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box>
    </Stack>
  );

  return (
    <Card
      sx={{
        p: 2,
        pl: 3,
        display: 'flex',
        alignItems: 'center',

        ...sx,
      }}
      {...other}
    >
      <Stack spacing={1.5} flexGrow={1}>
        <Box sx={{ color: 'text.secondary', typography: 'subtitle2' }}>{title}</Box>
        <Box sx={{ typography: 'h3' }}>{fShortenNumber(total)}</Box>
        {renderTrending}
      </Stack>

      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: '50%',
          bgcolor: 'background.neutral',
        }}
      >
        {icon}
      </Box>
    </Card>
  );
}
