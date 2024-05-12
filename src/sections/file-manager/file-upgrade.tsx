import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function FileUpgrade({ sx, ...other }: CardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 5,
        display: 'flex',
        alignItems: 'center',
        color: 'common.white',
        background: `radial-gradient(70% 70% at 0% 0%, ${theme.palette.grey[700]} 0%, ${theme.palette.common.black} 100%)`,
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt="Upgrade Illustration"
        src="/assets/illustrations/illustration-upgrade.png"
        sx={{
          right: 16,
          zIndex: 9,
          width: 120,
          height: 150,
          position: 'absolute',
        }}
      />

      <SvgColor
        src="/assets/background/abstract-circle-1.svg"
        sx={{
          zIndex: 8,
          width: 200,
          right: -32,
          height: 200,
          opacity: 0.08,
          position: 'absolute',
        }}
      />

      <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
        <Typography variant="h6" sx={{ maxWidth: 180 }}>
          Upgrade your plan and get more space
        </Typography>

        <Button color="warning" variant="contained">
          Upgrade Plan
        </Button>
      </Stack>
    </Card>
  );
}
