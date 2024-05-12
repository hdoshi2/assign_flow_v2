import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card, { CardProps } from '@mui/material/Card';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  earning: number;
  refunded: number;
  orderTotal: number;
  currentBalance: number;
};

export default function EcommerceCurrentBalance({
  title,
  earning,
  refunded,
  orderTotal,
  currentBalance,
  sx,
  ...other
}: Props) {
  const row = (label: string, value: number) => (
    <Stack direction="row" justifyContent="space-between" sx={{ typography: 'body2' }}>
      <Box component="span" sx={{ color: 'text.secondary' }}>
        {label}
      </Box>
      <Box component="span">{fCurrency(value)}</Box>
    </Stack>
  );

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Box
        sx={{
          mb: 1,
          typography: 'subtitle2',
        }}
      >
        {title}
      </Box>

      <Stack spacing={2}>
        <Box sx={{ typography: 'h3' }}>{fCurrency(currentBalance)}</Box>

        {row('Order Total', orderTotal)}
        {row('Earning', earning)}
        {row('Refunded', refunded)}

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning">
            Request
          </Button>

          <Button fullWidth variant="contained" color="primary">
            Transfer
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
